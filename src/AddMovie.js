import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (event) => {
        setName(event.target.value);
    }

   const updatePrice = (event) => {
        setPrice(event.target.value);
    }

   const updateSubmit = (event) => {
        event.preventDefault();
        setMovies(preMovies => [...preMovies, {name: name, price: '$' + price }]);
    }

    return (
       <form onSubmit={updateSubmit}>
       <input  type="text" name="name" value={name} onChange={updateName} />
       <input type="number" price="price" value={price} onChange={updatePrice} />
       <button type="submit"> submit</button>
       </form>
    );
}

export default AddMovie;