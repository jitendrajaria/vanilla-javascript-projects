const button = document.querySelector('button');
button.addEventListener('click', (evt) => {
  const box = document.getElementById('box');
  if (box.classList.contains('big')) {
    box.classList.remove('big');
  } else {
    box.classList.add('big');
  }
});

const cells = document.querySelectorAll('.cell');
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    cells[4 * i + j].style.backgroundPosition = `${-125 * j}px ${-125 * i}px`;
  }
}
