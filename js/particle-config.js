function addParticle(numParticles = 1) {
    window.pJSDom[0].pJS.fn.modes.pushParticles(numParticles);    
}

function startParticles(){
    $("#particles-js").show();
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 1,
            "density": {
              "enable": false,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#5f5f5f"
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
                "src": "img/pigeon.png",
                "width": 1,
                "height": 1
              }
          },
          "opacity": {
            "value": 1.0,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 1.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "size_min": 30,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 250,
            "color": "#f652ac",
            "opacity": 0.25,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 200,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 200,
              "rotateY": 500
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "none"
            },
            "onclick": {
              "enable": false,
              "mode": "none"
            },
            "resize": false
          },
          "modes": {
            "grab": {
              "distance": 150,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 300,
              "size": 10,
              "duration": 2,
              "opacity": 0.7,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    });
    window.pJSDom[0].pJS.fn.modes.pushParticles(1);
    window.pJSDom[0].pJS.particles.move.speed = 30;    
}