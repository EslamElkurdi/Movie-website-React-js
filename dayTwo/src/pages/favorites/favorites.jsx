import React from 'react'
import Movie from '../movie/movie'
import {
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Card from '../../components/card/card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToFavorites } from '../../store/slice/favorites';
import { removeFromFavorites } from '../../store/slice/favorites';

function Favorites() {


  const favoriteMovies = useSelector(state => state.addToFavorites);
  console.log("Favorite Movies:", favoriteMovies);

  // Store


  const dispatch = useDispatch();



  const handleRemoveOrAdd = (movieId) => {
    const isMovieInFavorites = favoriteMovies.some(movie => movie.id === movieId);
    if (isMovieInFavorites) {
      handleRemoveFromFavorites(movieId);
    } else {
      handleAddToFavorites(movieId);
    }
  }



  const handleAddToFavorites = async (movieId) => {
    // Dispatch action to fetch movie details and add to favorites
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6d3c0b6f63323479c21ff2aa2b2d3c3c`);
      const newFavMovie = response.data;

      dispatch(addToFavorites({ id: newFavMovie.id, imageUrl: newFavMovie.backdrop_path, title: newFavMovie.title }));
      console.log(newFavMovie);

      // setFavMovies(prevFavMovies => [...prevFavMovies, newFavMovie]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  const handleRemoveFromFavorites = (movieId) => {
    // Dispatch action to remove movie from favorites
    dispatch(removeFromFavorites(movieId));
  };




  //End 





  return (
    <>
      
      {favoriteMovies.length > 0 
      ? <MDBRow className='row-cols-1 row-cols-md-3 g-4 m-1'>
        {favoriteMovies.map((movie, index) => (
          <MDBCol key={index}>
            <Card
              title={movie.title}
              imageUrl={movie.imageUrl}
              movieId={movie.id}
              handleFav={() => handleRemoveOrAdd(movie.id)}


            />
          </MDBCol>
        ))}
        </MDBRow> 
      : <MDBRow className='justify-content-center align-items-center' style={{ minHeight: '70vh', overflow: 'hidden' , maxWidth: '1488px'}}>
      <MDBCol className='text-center'>
          <h2>There is no any Favorite  Movie</h2>
      </MDBCol>
  </MDBRow>}
    </>
  )

}

export default Favorites