const ParticleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    color: { value: '#000000' },
    size: {value: 2},
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "bottom-right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false, mode: "remove" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.8, color: '#ffffff' } },
      bubble: { distance: 200, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  }
}

export default ParticleOptions