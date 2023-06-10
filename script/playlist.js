function getPlaylist() {
    return { 'Kenny Rogers-The Bambler', 'Taylor-Midnigth', 'Tones-& Taylor' }
}

function shufflePlaylist(Playlist) {
    return Playlist.reverse();
}
module.exports = {
    getPlaylist,
    shufflePlaylist
}