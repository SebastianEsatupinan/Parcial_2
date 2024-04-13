import React, { useState } from 'react';
import { MoviesGrid } from "./Componentes/MoviesGrid"; // Asegúrate de que la ruta sea correcta
import styles from "./App.module.css"; // Ajusta la ruta si es necesario

export const App = () => {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(search);
    if (search && !searchHistory.includes(search)) {
      setSearchHistory(prevHistory => [...prevHistory, search]);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>CuevaFlix</h1>
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Buscar películas..."
            value={search}
            onChange={handleSearchChange}
          />
          <button className={styles.searchButton} onClick={handleSearch}>Buscar</button>
        </div>
      </header>
      <main>
        <MoviesGrid search={searchTerm} />
        <div className={styles.searchHistory}>
          <h2>Historial de búsqueda</h2>
          <ul>
            {searchHistory.map((item, index) => (
              <li key={index} onClick={() => setSearch(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
