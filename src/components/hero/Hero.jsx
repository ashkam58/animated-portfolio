import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Ashkam Anwar</h2>
          <h1>Full Stack MERN developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/public/hero.png" alt="" /> 
      </div>
    </div>
  );
};
export default Hero;
