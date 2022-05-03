import request from "request";

function aboutMovie(wanted){
var queryUrl = "http://www.omdbapi.com/?t=" + wanted + "&i=tt3896198&apikey=6df9c95";
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          let movieName = JSON.parse(body).Title;
          let movieYear = JSON.parse(body).Year;
          let movieRating = JSON.parse(body).imdbRating;
          console.log("About movie "+wanted+": " , movieName , movieYear , "Rating:" , movieRating);
        }
      });
}
export default aboutMovie;