import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../StylesComponents/UserOptions.module.css'; // Añade tus estilos aquí

const UserOptions = () => {
  return (
    <div className={styles.optionsContainer}>
      <Link to="/login" className={styles.optionButton}>Iniciar sesión</Link>
      <Link to="/register" className={styles.optionButton}>Registrarse</Link>
    </div>
  );
};

export default UserOptions;