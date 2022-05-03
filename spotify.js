import Spotify from 'node-spotify-api';

function spotifyFunc(operation , wanted){
    var spotify = new Spotify({
        id: '34d5d39f99ec4abfbd8376e708e61077',
        secret: '9010afcf515e486795de574dc9f6cbb9'
    });
    spotify.search({ type: operation, query: wanted }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        switch (operation){
            case "track":
            console.log(data.tracks.items);
            break;
            case "album":
            console.log(data.albums.items);
            break;
            case "artist":
            console.log(data.artists.items);
            break;
        }
    });
}
export default spotifyFunc;
