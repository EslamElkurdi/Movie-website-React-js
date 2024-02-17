import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

function Details() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams(); // Get the movieId from URL params

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6d3c0b6f63323479c21ff2aa2b2d3c3c`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function if needed
        
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 m-1'>
            <MDBCol key={movieId}>
            <Card title={movie.title} imageUrl={movie.backdrop_path} isInMoviePage={false}/>
            </MDBCol>
            
        </MDBRow>
        
    );
}

export default Details;
