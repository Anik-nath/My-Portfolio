import React from "react";
import "./test.css";
import Particles from "react-tsparticles";
import DarkMode from "../DarkMode/DarkMode";

const Test = () => {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {};
  return (
    <>
      <div id="container">
          <div id="tsparticles">
          {/* <Particles /> */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 60,
              fullScreen: false,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#de4444",
                },
                links: {
                  color: "#fff",
                  distance: 150,
                  enable: true,
                  opacity: 0.1,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 0.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
          {/* <Particles /> */}
          </div>
        <div id="your-div">
          <h1>welcome</h1>
          <div>
            <DarkMode></DarkMode>
          </div>
          <div className="content">
            <h1>useDarkMode</h1>
            <p>
              For example, here is a component that shares the custom hook{' '}
              <code>useDarkMode</code> with the toggle component above.
            </p>
            <p>It couldn't be any easier!</p>
          </div>
        </div>
      </div>
      <div id="mydiv">
        <h2>two div</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cumque itaque deserunt labore? Aliquam eaque voluptates totam, minus, asperiores temporibus ducimus libero sit excepturi reiciendis aliquid repudiandae iusto culpa, nobis assumenda facere odio voluptatem placeat voluptatibus possimus. Ipsum rerum quia aliquam. Culpa rem deleniti voluptatem cupiditate. Soluta recusandae quisquam optio ratione blanditiis cum asperiores dolor, non doloremque veniam? Minus sit, nostrum omnis itaque, sequi, dignissimos enim voluptatem natus voluptas facere delectus sunt unde eum molestias voluptate maiores assumenda neque quos quia quo. Necessitatibus fuga non aliquid magni optio aliquam obcaecati. Ducimus facilis nesciunt rerum aspernatur itaque quas iste sequi modi.</p>
      </div>
    </>
  );
};

export default Test;
