const list = require(".playlist");

function play(playList) {
    console.log("Now playing ", playList(0));
}
let songs = list.getplaylist();
play(shufflePlaylist.songs);