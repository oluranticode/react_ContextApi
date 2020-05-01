import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav>
        <h2> Aluko Temitope </h2>
        <h5>List of Movies : {movies.length}</h5>
        </nav>
    );
}

export default Nav;