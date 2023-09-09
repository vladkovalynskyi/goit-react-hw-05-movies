import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTMoviesReviews } from 'services/fetchAPI';
import css from './Reviews.module.css'; 

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const response = await fetchTMoviesReviews(movieId);
        const reviewsInfo = await response.data.results;
        setReviews(reviewsInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {reviews ? (
        reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css['no-reviews']}>We don't have any reviews for this movie.</p>
        )
      ) : (
        <p>Loading...</p>
    )}
    </div>
  );
};

export default Reviews;
