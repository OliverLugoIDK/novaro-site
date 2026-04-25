document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 120, 220)}ms`;
    observer.observe(item);
  });

  const magneticLinks = document.querySelectorAll(".magnetic");

  magneticLinks.forEach((link) => {
    link.addEventListener("mousemove", (event) => {
      if (window.innerWidth <= 900) return;

      const rect = link.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const moveX = (x - rect.width / 2) / 30;
      const moveY = (y - rect.height / 2) / 30;

      link.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-4px)`;
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });
  });
});