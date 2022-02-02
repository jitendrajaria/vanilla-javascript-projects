const videoCanvas = document.querySelector('#video-canvas');
videoCanvas.width = 30;
videoCanvas.height = 30;
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = videoCanvas.getContext('2d');
const imageData = ctx.getImageData(0, 0, videoCanvas.width, videoCanvas.height);

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  const video = document.createElement('video');
  video.srcObject = stream;
  video.play();
  const grid = document.querySelector('.grid');
  setInterval(() => {
    ctx.clearRect(0, 0, videoCanvas.width, videoCanvas.height);
    ctx.drawImage(video, 0, 0, videoCanvas.width, videoCanvas.height);
    while (grid.hasChildNodes()) {
      grid.removeChild(grid.lastChild);
    }
    const imageData = ctx.getImageData(0, 0, videoCanvas.width, videoCanvas.height);
    // console.log('width', videoCanvas.width);
    // console.log('width', videoCanvas.height);

    for (let i = 0; i < videoCanvas.height; i++) {
      for (let j = 0; j < videoCanvas.width; j++) {
        const div = document.createElement('div');
        div.innerText = `${i} ${j}`;
        div.classList.add('cell');

        if (isBrightnessAboveThreshold(imageData.data[videoCanvas.width * i * 4 + 4 * j + 0], imageData.data[videoCanvas.width * i * 4 + 4 * j + 1], imageData.data[videoCanvas.width * i * 4 + 4 * j + 2], 90)) {
          div.classList.add('active');
        }
        grid.appendChild(div);
      }
    }
  }, 100);
});

// ctx.drawImage();
