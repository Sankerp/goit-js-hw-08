import Player from '@vimeo/player';
console.log(Player);
import throttle from 'lodash.throttle';
console.log(throttle);

const iframe = document.querySelector('iframe#vimeo-player');
const newPlayer = new Player(iframe);

function time(data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
newPlayer.on('timeupdate', throttle(time, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');

if (saveTime) {
  newPlayer.setCurrentTime(saveTime);
}
