import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRipple,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Card({ title, imageUrl, movieId, isInMoviePage = true, handleFav }) {


  // let's check if the movie in fav movies or not 

  const favoriteMovies = useSelector(state => state.addToFavorites);



  const isAddedToFavMovies = favoriteMovies?.some((movie) => movie.id === movieId) ? true : false;

  return (

    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </MDBCardText>
        {
          isInMoviePage ? <Link to={`/details/${movieId}`}>
            <MDBBtn>
              Details
            </MDBBtn>
          </Link>
            : null
        }

        <MDBIcon
          className='mx-4'
          style={{ fontSize: "25px" }}
          onClick={() => handleFav(movieId)}
        >
          {isAddedToFavMovies ? (
            <MDBIcon icon="heart" fas />
          ) : (
            <MDBIcon icon="heart" far />
          )}
        </MDBIcon>


      </MDBCardBody>
    </MDBCard>

  );
}

export default Card