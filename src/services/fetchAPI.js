import { BASE_URL } from 'utils/keyAPI';
import { API_KEY } from 'utils/keyAPI';
import axios from 'axios';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTMovie = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTMoviesCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTMoviesReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSearchingMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};