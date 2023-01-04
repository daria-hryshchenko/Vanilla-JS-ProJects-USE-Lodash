import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const STORAGE_KEY = 'videoplayer-current-time';

const vimeoPlayerEl = document.querySelector("#vimeo-player");
const player = new Player(vimeoPlayerEl);

player.on('timeupdate', throttle(event => {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);