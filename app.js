import React from "react"
import ReactDOM from "react-dom"
import Movie from "./components/movies";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [image, setImage] = React.useState("A");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    const json = await response.json();
    setMovies(json.data);
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          autoComplete="off"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button>Search</button>
    <ul id= "movies">
    const MoviesReceived = movies.map((movie) => {
    const name = movie.show.name
    const image = movie.show.image.medium
    return (
      <Card
        key={name}
        title={name}
        image={image}
      />);
    })}
      </ul>


}

ReactDOM.render(<App/>, document.querySelector('#root'))