import React, { useState } from 'react';
import styles from '../StylesComponents/inicioSesion.module.css';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías la lógica de inicio de sesión
    console.log(username, password);
    // Normalmente enviarías esta información a un servidor para validarla
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.formLabel}>Usuario</label>
          <input
            type="text"
            id="username"
            className={styles.formInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Contraseña</label>
          <input
            type="password"
            id="password"
            className={styles.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.formButton}>
            Entrar
          </button>
        </div>
      </form>

        <div className={styles.formContainer}>
            <button onClick={onClose} className={styles.closeButton}>Cerrar</button>
            {/* El resto del formulario aquí... */}
        </div>

      
    </div>

    
  );
};

export default LoginForm;
