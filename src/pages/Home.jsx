import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        const trendingMovies = response.data.results;
        setTrendingMovies(trendingMovies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data.');
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MoviesList movies={trendingMovies} />
      )}
    </div>
  );
};

export default Home;
