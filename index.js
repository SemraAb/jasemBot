import aboutMovie from './omdb.js';
import spotifyFunc from './spotify.js';

var operation = process.argv[3];
var wanted = process.argv[4];// if there are more than one word use '-' please!
switch(operation){
    case "movie":
        aboutMovie(wanted);
        break;
    case "track":
        spotifyFunc(operation , wanted)
        break;
    case "album":
        spotifyFunc(operation , wanted)
        break;
    case "artist":
        spotifyFunc(operation , wanted)
        break;
}

