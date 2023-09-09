import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <div>Sorry, this page does not exist...</div>
      <Link to="/">&#129044; Go Home</Link>
    </div>
  );
};