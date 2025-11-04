// Each section should use .page-block and contain its own
// .block-title, .label, and (optionally) .side-link.
const blocks = [...document.querySelectorAll('.page-block')];

// tune this: distance (px) from viewport center where fade starts
const FADE_START = 300;

function centerOpacity(rect) {
  const blockCenter = rect.top + rect.height / 2;
  const vpCenter = window.innerHeight / 2;
  const dist = Math.abs(blockCenter - vpCenter);
  // 1 at center, → 0 by FADE_START away
  return Math.max(0, Math.min(1, 1 - dist / FADE_START));
}

function updateAll() {
  for (const block of blocks) {
    const rect = block.getBoundingClientRect();
    let o = centerOpacity(rect);

    // hard reset when fully off-screen
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) o = 0;

    block.querySelectorAll('.block-title, .label, .side-link').forEach(el => {
      if (el) el.style.opacity = o;
    });
  }
}

// rAF throttle
let ticking = false;
function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      updateAll();
      ticking = false;
    });
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
updateAll();