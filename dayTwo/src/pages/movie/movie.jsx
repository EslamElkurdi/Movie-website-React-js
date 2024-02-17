import React, { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import axios from 'axios';
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Pagination from '../../components/paginiation/pagination';
import { useDispatch } from 'react-redux';
// Import addToFavorites from the slice reducer file, not the slice file
import { addToFavorites } from '../../store/slice/favorites';
import { removeFromFavorites } from '../../store/slice/favorites';
import { useSelector } from 'react-redux';



function Movie() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // const [favMovies, setFavMovies] = useState([]);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    async function fetchData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6d3c0b6f63323479c21ff2aa2b2d3c3c&page=${currentPage}`);
            setData(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Store


    const dispatch = useDispatch();

    const favoriteMovies = useSelector(state => state.addToFavorites);

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
        <>       {data.length > 0
            ?
            <div>

                <MDBRow className='row-cols-1 row-cols-md-3 g-4 m-1'>
                    {data.map((movie, index) => (
                        <MDBCol key={index}>
                            <Card
                                title={movie.title}
                                imageUrl={movie.backdrop_path}
                                movieId={movie.id}
                                handleFav={() => handleRemoveOrAdd(movie.id)}

                            />
                        </MDBCol>
                    ))}
                </MDBRow>


                <footer style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(data.length / itemsPerPage)}
                        onPageChange={(newPage) => setCurrentPage(newPage)}
                    />
                </footer>
            </div>
            : <>
            <p className='placeholder-glow'>
              <span className='placeholder col-12'></span>
            </p>
        
            <p className='placeholder-wave'>
              <span className='placeholder col-12'></span>
            </p>
            </>
        }

        </>

    );
}

export default Movie;
