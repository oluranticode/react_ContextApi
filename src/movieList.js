import React, {useState, useContext} from 'react';
import Movie from './movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    // const [movies, setMovies] = useState([
    //     {
    //         name: 'Harry Potter',
    //         price: '$10',
    //         id:'23145'
    //     },

    //     {
    //         name: 'Extraction',
    //         price: '$50',
    //         id:'23178'
    //     },
    //     {
    //         name: 'Money Heist',
    //         price: '$100',
    //         id:'27645'
    //     },
    //     {
    //         name: 'No Time to die',
    //         price: '$80',
    //         id:'23445'
    //     }
    // ]);
    return(
        <div>
        {
            movies.map(movie => (
               <Movie key={movie.id} name={ movie.name} price={movie.price} />
                
            ))
        }
        </div>
    );
}

export default MovieList;