let stabCount = 0;
const countDisplay = document.getElementById('stabCount');
const girl = document.getElementById('girl');
const flash = document.getElementById('flash');


 let stabSound = new Audio('assets/stab-sound.wav');

 girl.addEventListener('click', () => {
    if (isOverlapping(sword, girl)) {
      stabCount++;
      countDisplay.textContent = stabCount;
  
      flash.style.opacity = 1;
      setTimeout(() => flash.style.opacity = 0, 100);
  
      stabSound.currentTime = 0;
      stabSound.play();
    }
  });
  

  function isOverlapping(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();
  
    return !(
      r1.right < r2.left ||
      r1.left > r2.right ||
      r1.bottom < r2.top ||
      r1.top > r2.bottom
    );
  }
  
const sword = document.getElementById('sword');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Start dragging
sword.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    sword.style.left = (e.pageX - offsetX) + 'px';
    sword.style.top = (e.pageY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
