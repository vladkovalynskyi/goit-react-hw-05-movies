import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTMoviesCast } from 'services/fetchAPI';
import { IMG_URL_CAST } from 'utils/keyAPI';
import css from './Cast.module.css'; // Підключіть CSS файл

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const response = await fetchTMoviesCast(movieId);
        const castInfo = await response.data.cast;
        setCast(castInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <div className={css.wrapper}> 
      {cast ? (
        <ul className={css.castList}>
          {cast.map(actor => (
            <li key={actor.id} className={css.actor}>
              {actor.profile_path ? (
                <img src={`${IMG_URL_CAST}${actor.profile_path}`} alt="Actor" className={css.castImage} /> 
              ) : (
                <p className={css['no-image']}>Sorry, no image</p>
              )}

              <h3 className={css.CastName}>{actor.name}</h3> 
              <p className={css.character}>Character: {actor.character}</p> 
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.loading}>Loading...</p>
      )}
    </div>
  );
};

export default Cast;
