const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

// user: userManagementDB
// pass: Qw2aKihyS5hqEPm0

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dvetdgy.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("coffeeHouseDB");
    const coffeeCollection = db.collection("allCoffee");
    const usersCollection = db.collection("allUsers");

    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.get("/coffees", async (req, res) => {
      try {
        const result = await coffeeCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch data" });
      }
    });

    app.get("/admin/coffees/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const coffee = await coffeeCollection.findOne(query);
      res.send(coffee);
    });

    app.delete("/coffees/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });
    app.put("/update-coffee/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const updatedData = {
        $set: req.body,
      };

      const result = await coffeeCollection.updateOne(query, updatedData);
      res.send(result);
    });

    app.post("/add-coffee", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.post("/jwt", async (req, res) => {
      const user = { email: req.body.email };
      const token = jwt.sign(user, "secret", { expiresIn: "1h" });
      res.send({ token });
    });

    app.patch("/users", async (req, res) => {
      const { email, lastSignInTime } = req.body;
      const filter = { email: email };
      const updatedData = { lastSignInTime: lastSignInTime };
      const updatedDoc = {
        $set: updatedData,
      };
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Coffee house server running on port: ${port}`);
});
