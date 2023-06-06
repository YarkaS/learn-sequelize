const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
function insertNewGenre() {
  // Add code here
   return Genre.create({id:4,name:"Thriller"});
 
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
function insertNewMovie() {
  // Add code here
  return Movie.create({ id: 6, title: "Shutter Island", year: 2010, genreId: 4 });
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
   const mov2 = await Movie.findByPk(2);
   return mov2.title;

   
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  const all_actors = await Actor.findAll();
  return all_actors.map(actor=>actor.name);
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  const movs= await  Movie.findAll({
  	attributes:['title'],
  	where:{
  	  year:2008
  	}
  });
  return movs.map(movie=>movie.title);
  
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
function deleteGenreYouAdded() {
  // Add code here
  return Genre.destroy({
  		where:{
  		  id: 4
  		 }
  	});
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  // Add code here
  const searched_actor =await Actor.findByPk(2);
  const searched_movie =await Movie.findByPk(4);
  await searched_actor.addMovie(searched_movie);
  
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
  const searched_actor =await Actor.findByPk(3);
  const searched_movie =await Movie.findByPk(5);
  await searched_actor.addMovie(searched_movie);
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};
