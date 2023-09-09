import React from 'react';
import { Link } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.addInfoTitle}>Additional Information</h3>
      <ul className={css.addInfoList}>
        <li className={css.addInfoListItem}>
          <Link className={css.addInfoListLink} to="cast">Cast</Link>
        </li>
        <li>
          <Link className={css.addInfoListLink} to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr className={css.hr}/>
    </div>
  );
};