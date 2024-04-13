// Asegúrate de importar useState y useEffect de React
import React, { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';
import styles from '../StylesComponents/MoviesGrid.module.css';
import moviesData from './movies.json';

export const MoviesGrid = ({ search }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulando una llamada de API
    setMovies(moviesData); // Inicializamos 'movies' con los datos cargados del archivo JSON
  }, []);

  // Filtramos las películas basándonos en la prop 'search'
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.grid}>
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
