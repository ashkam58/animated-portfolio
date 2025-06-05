import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="heroParticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            enable: true,
            speed: 2,
            parallax: { enable: true, force: 60, smooth: 10 },
          },
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
};

export default ParticleBackground;
