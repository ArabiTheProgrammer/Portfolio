const cursorDot = document.querySelector("[data-cursor-dot]");
const mainOutline = document.querySelector("[data-cursor-outline]");

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
  let mouseX = 0, mouseY = 0;
  let mainX = 0, mainY = 0;

  const mainSpeed = 0.08;
  const trailSpeeds = [0.25, 0.2, 0.15];
  const fadeDistance = 100; // fade near top/bottom

  // --- Idle settings ---
  const idleTime = 4000; // 5s (set to 7000 for 7s)
  let idleTimer = null;
  let isIdle = false;

  const setAllOpacity = (v) => {
    cursorDot.style.opacity = v;
    mainOutline.style.opacity = v;
  };

  const hideCursorIdle = () => {
    // slow the opacity transition via class, but also set inline opacity = 0
    document.body.classList.add("cursor-idle");
    setAllOpacity(0);
    isIdle = true;
  };

  const showCursor = () => {
    if (isIdle) {
      document.body.classList.remove("cursor-idle");
      setAllOpacity(1); // will be overridden by edge-fade below on the same move
      isIdle = false;
    }
    resetIdleTimer();
  };

  const resetIdleTimer = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(hideCursorIdle, idleTime);
  };
  // ----------------------

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    showCursor(); // also resets idle timer

    // Edge fade (top/bottom)
    let opacity = 1;
    if (mouseY < fadeDistance) {
      opacity = mouseY / fadeDistance;
    } else if (mouseY > window.innerHeight - fadeDistance) {
      opacity = (window.innerHeight - mouseY) / fadeDistance;
    }
    opacity = Math.max(0, Math.min(1, opacity));
    setAllOpacity(opacity);

    // Move dot
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Robust hide when leaving the viewport fast
  document.addEventListener("mouseleave", () => {
    setAllOpacity(0);
  });
  document.addEventListener("mouseenter", showCursor);

  function animate() {
    mainX += (mouseX - mainX) * mainSpeed;
    mainY += (mouseY - mainY) * mainSpeed;
    mainOutline.style.left = `${mainX}px`;
    mainOutline.style.top = `${mainY}px`;

    requestAnimationFrame(animate);
  }
  animate();

  // Click shrink stays the same + wakes cursor from idle
  window.addEventListener("mousedown", () => {
    showCursor();
    mainOutline.classList.add("click-effect");
    cursorDot.classList.add("click-effect");
  });
  window.addEventListener("mouseup", () => {
    mainOutline.classList.remove("click-effect");
    cursorDot.classList.remove("click-effect");
    showCursor();
  });

  // start idle countdown on load
  resetIdleTimer();
} else {
  cursorDot.style.display = "none";
  mainOutline.style.display = "none";
}
