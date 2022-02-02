console.log('Loaded script');

window.addEventListener('keydown', (evt) => {
  console.log(evt);
  playSound(evt.code);
});

function playSound(keyName) {
  const audio = document.querySelector(`#${keyName}`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const keyDiv = document.querySelector(`.${keyName}`);
  keyDiv.classList.add('play');
  audio.addEventListener(
    'ended',
    () => {
      keyDiv.classList.remove('play');
    },
    { once: true }
  );
}
