function solve(band,album,song) {
    //(albumName.length * bandName.length) * song-name.length / 2
    let songDuration=(album.length * band.length) * song.length /2;
    let timesRotation=Math.ceil(songDuration/2.5);
    console.log(`The plate was rotated ${timesRotation} times.`);
}
solve('Rammstein', 'Sehnsucht',

'Engel');