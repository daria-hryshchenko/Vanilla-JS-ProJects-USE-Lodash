import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const vimeoPlayerEl = document.querySelector("#vimeo-player");
const player = new Player(vimeoPlayerEl);

player.on('timeupdate', throttle(event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000)).catch(err => {
  console.warn(err);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(err => {
  console.warn(err);
});