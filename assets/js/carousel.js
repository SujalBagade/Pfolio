document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");
  if (!track) return;

  // Clone all logos for infinite effect
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);

  // Combine both tracks side by side
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.gap = "3rem";
  wrapper.style.width = "max-content";
  wrapper.style.willChange = "transform";

  track.parentElement.insertBefore(wrapper, track);
  wrapper.appendChild(track);
  wrapper.appendChild(clone);

  let position = 0;
  const speed = 0.8; // adjust scroll speed

  function animate() {
    position -= speed;
    const width = track.scrollWidth;
    if (Math.abs(position) >= width) position = 0; // seamless reset
    wrapper.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
