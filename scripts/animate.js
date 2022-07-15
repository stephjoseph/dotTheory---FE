gsap.registerPlugin(ScrollTrigger);

const features = document.querySelectorAll('.feature__container');

features.forEach((feature) => {
  gsap.fromTo(
    feature,
    {
      opacity: 0,
      y: 100,
    },
    {
      scrollTrigger: {
        trigger: feature,
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      y: 0,
      opacity: 1,
    }
  );
});
