// Movie Collection
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

// Function to render the movie list
const renderMovieList = (movieCollection) => {
    const movieListElement = document.getElementById("movie-list");
    movieListElement.innerHTML = ''; // Clear current list
    movieCollection.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.releaseYear}) - ${movie.genre} - Rating: ${movie.rating}`;
        movieListElement.appendChild(li);
    });
};

// Add a movie to the collection
const addMovie = (movie) => {
    movies.push(movie);
    renderMovieList(movies); // Re-render the list
};

// Event listener for adding a movie through form
document.getElementById("movie-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    addMovie({ title, genre, rating, releaseYear });

    // Clear form inputs
    event.target.reset();
});

// Filter movies by genre
const filterMoviesByGenre = () => {
    const selectedGenre = document.getElementById("genre-filter").value;
    if (selectedGenre) {
        const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
        renderMovieList(filteredMovies);
    } else {
        renderMovieList(movies); // Display all movies if no genre selected
    }
};

// Find highest rated movie
const findHighestRatedMovie = () => {
    const highestRated = movies.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest, movies[0]);
    document.getElementById("result-output").textContent = `Highest Rated Movie: ${highestRated.title} with rating ${highestRated.rating}`;
};

// Get movie titles
const getMovieTitles = () => {
    const titles = movies.map(movie => movie.title).join(', ');
    document.getElementById("result-output").textContent = `Movie Titles: ${titles}`;
};

// Filter movies released after a specific year
const moviesAfterYear = () => {
    const filteredMovies = movies.filter(movie => movie.releaseYear > 2010);
    renderMovieList(filteredMovies);
};

// Initial render of the movie list
renderMovieList(movies);
