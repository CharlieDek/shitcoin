function changeToBirdParticles() {
    if (window.innerWidth < c_MAX_MOBILE_WIDTH) {
        // window.pJSDom[0].pJS.particles.size.value = 45;
    }
    window.pJSDom[0].pJS.fn.modes.pushParticles(1);    
}

function removeBirdParticle() {
    window.pJSDom[0].pJS.fn.modes.removeParticles(1);
}


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 0,
        "density": {
          "enable": false,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#f652ac"
      },
      "shape": {
        "type": "image",
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
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 70,
        "random": false,
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
        "speed": 20,
        "direction": "random",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
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
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
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