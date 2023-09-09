import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchingMovies } from 'services/fetchAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const getSearchingMovies = async query => {
        try {
          const response = await fetchSearchingMovies(query);
          const searchingMovies = response.data.results;
          setSearchedMovies(searchingMovies);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      getSearchingMovies(query);
    } else {
      setSearchedMovies([]);
    }
  }, [query]);

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.movie.value });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" required name="movie" />
        <button type="submit">Search</button>
      </form>
      {searchedMovies.length > 0 ? (
        <MoviesList movies={searchedMovies} />
      ) : null}
    </div>
  );
};

export default Movies;
