const rain = document.querySelector('.rain');
const drops = [];
const DROP_COUNT = 100;

for (let i = 0; i < DROP_COUNT; i++) {
  const drop = document.createElement('div');
  drop.className = 'drop';
  resetDrop(drop);
  rain.appendChild(drop);
  drops.push(drop);
}

function resetDrop(drop) {
  drop.x = Math.random() * window.innerWidth;
  drop.y = Math.random() * -window.innerHeight;
  drop.speed = 4 + Math.random() * 6;

  drop.style.left = drop.x + 'px';
  drop.style.top = drop.y + 'px';
}

function animate() {
  drops.forEach(drop => {
    drop.y += drop.speed;

    if (drop.y > window.innerHeight) {
      resetDrop(drop);
    }

    drop.style.transform = `translateY(${drop.y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();
