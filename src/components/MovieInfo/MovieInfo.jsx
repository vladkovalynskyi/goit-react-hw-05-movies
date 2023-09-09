import React, { useEffect, useState } from 'react';
import { fetchTMovie } from 'services/fetchAPI';
import { IMG_URL } from 'utils/keyAPI';
import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

export const MovieInfo = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const getMovieInfo = async id => {
      try {
        const response = await fetchTMovie(id);
        const movieDetails = await response.data;
        setSelectedMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getMovieInfo(id);
  }, [id]);

  return (
    <div className={css.wrapper}>
      {selectedMovie ? (
        <div>
          <div className={css.info}>
          <img src={`${IMG_URL}${selectedMovie.poster_path}`} alt="Poster" />
          <div>
            <h1>
              {selectedMovie.title} ({selectedMovie.release_date.slice(0, 4)})
            </h1>
            <p className={css.par}>User score: {Math.round(selectedMovie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p className={css.par}>{selectedMovie.overview}</p>
            <h2>Genres</h2>
            <p className={css.par}>{selectedMovie.genres.map(genre => genre.name).join(' ')}</p>
          </div>
          
        </div>
        <hr className={css.hr}/>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

MovieInfo.propTypes = {
  id: PropTypes.number,
};