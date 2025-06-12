const photos = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg",
    "assets/images/9.jpeg",
    "assets/images/10.jpeg",
    "assets/images/11.jpeg",
    "assets/images/12.jpeg",
    "assets/images/13.jpeg",
    "assets/images/14.jpeg",
    "assets/images/15.jpeg",
    "assets/images/16.jpeg",
    "assets/images/17.jpeg",
    "assets/images/18.jpeg",
    "assets/images/19.jpeg",
    "assets/images/20.jpeg",
    "assets/images/21.jpeg",
    "assets/images/22.jpeg",
    "assets/images/23.jpeg",
    "assets/images/24.jpeg",
    "assets/images/25.jpeg",
    "assets/images/26.jpeg",
    "assets/images/27.jpeg",
    "assets/images/28.jpeg",
    "assets/images/29.jpeg",
    "assets/images/30.jpeg",
    "assets/images/31.jpeg",
    "assets/images/32.jpeg",
    "assets/images/33.jpeg",
    "assets/images/34.jpeg",
    "assets/images/35.jpeg",
    "assets/images/36.jpeg",
    "assets/images/37.jpeg",
    "assets/images/38.jpeg",
    "assets/images/39.jpeg",
    "assets/images/40.jpeg",
    "assets/images/41.jpeg",
    "assets/images/42.jpeg",
    "assets/images/43.jpeg",
    "assets/images/44.jpeg",
    "assets/images/45.jpeg",
    "assets/images/46.jpeg",
    "assets/images/47.jpeg",
    "assets/images/48.jpeg"
];

const songs = [
    "assets/songs/musica1.mp3",
    "assets/songs/musica2.mp3",
    "assets/songs/musica3.mp3",
    "assets/songs/musica4.mp3",
    "assets/songs/musica5.mp3",
    "assets/songs/musica6.mp3",
    "assets/songs/musica7.mp3",
    "assets/songs/musica8.mp3",
    "assets/songs/musica9.mp3",
    "assets/songs/musica10.mp3",
    "assets/songs/musica11.mp3"
];

for (let i = 1; i <= 11; i++) {
  songs.push(`assets/songs/musica${i}.mp3`);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(photos);
shuffle(songs);

let photoIndex = 0;
let songIndex = 0;
let autoPhotoTimer;

const img = document.getElementById('photo');
const audio = document.getElementById('player');
const volumeSlider = document.getElementById('volume');

function setPhoto() {
  img.src = photos[photoIndex];
}

function resetPhotoTimer() {
  clearTimeout(autoPhotoTimer);
  autoPhotoTimer = setTimeout(next, 10000); // 10 segundos
}

// Troca de fotos
function next() {
  photoIndex = (photoIndex + 1) % photos.length;
  setPhoto();
  resetPhotoTimer();
}

function prev() {
  photoIndex = (photoIndex - 1 + photos.length) % photos.length;
  setPhoto();
  resetPhotoTimer();
}

// Música
function playNextSong() {
  audio.src = songs[songIndex];
  audio.play();
  songIndex = (songIndex + 1) % songs.length;
}

function nextSong() {
  audio.pause();
  playNextSong();
}

audio.addEventListener('ended', playNextSong);

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

document.addEventListener('DOMContentLoaded', () => {
  audio.volume = volumeSlider.value;
  playNextSong();
  setPhoto();
  resetPhotoTimer();
});