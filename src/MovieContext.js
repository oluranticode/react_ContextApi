import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id:'23145'
        },

        {
            name: 'Extraction',
            price: '$50',
            id:'23178'
        },
        {
            name: 'Money Heist',
            price: '$100',
            id:'27645'
        },
        {
            name: 'No Time to die',
            price: '$80',
            id:'23445'
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
        </MovieContext.Provider>
    );
}