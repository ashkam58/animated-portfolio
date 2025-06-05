import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text">
          <h1>Hello, I&apos;m Ashkam Anwar</h1>
          <p className="subtitle">AI &amp; Coding Educator | Teacher Trainer</p>
          <div className="cta">
            <button>Get Started</button>
          </div>
        </div>
        <div className="image">
          <img src="/hero.png" alt="Fun coding illustration" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
