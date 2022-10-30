import { useCallback } from "react"
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesContainer(props: unknown) {

  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    
    <Particles
      options={{
        smooth: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10
              }
            }
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 15
            }
          }
        },
        particles: {
          move: {
            direction: "none",
            distance: 5,
            enable: true,
            outModes: "none",
            speed: 1
          },
          number: {
            value: 600
          },
          shape: {
            type: ["circle", "square", "triangle"]
          },
          size: {
            value: {
              min: 3,
              max: 5
            }
          }
        },
        canvasMask: {
          enable: true,
          scale: 5,
          pixels: {
            filter: "pixelFilter"
          },
          image: {
            src: "https://particles.js.org/images/amongus_cyan.png"
          }
        },
        background: {
          color: "#000000",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
        
      }}
      init={customInit}
    />
  )
}