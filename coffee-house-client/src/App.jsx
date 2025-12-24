import "./App.css";

function App() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/LDGPSLmt/3.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-start">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold fontRancho">Hello there</h1>
          <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn btn-warning shadow-none rounded-none fontRancho">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
