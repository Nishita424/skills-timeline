const items = document.querySelectorAll("#timeline li");

// Check if the div is entirely inside the current viewport
const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Add class 'show' to all items in current viewport
const run = () =>
  items.forEach((item) => {
    if (isInViewPort(item)) {
      item.classList.add("show");
    }
  });

// Events for which required functionality should be done
window.addEventListener("load", run);
window.addEventListener("scroll", run);
window.addEventListener("resize", run);
