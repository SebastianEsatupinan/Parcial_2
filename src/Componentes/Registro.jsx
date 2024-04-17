import React, { useState } from 'react';
import styles from '../StylesComponents/Registro.module.css'; // Asegúrate de que este archivo CSS exista

const RegisterForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías la lógica de registro, como validación y enviar al servidor
    console.log(name, email, password, confirmPassword);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Registrarse</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Nombre</label>
          <input
            type="text"
            id="name"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Correo electrónico</label>
          <input
            type="email"
            id="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="confirm-password" className={styles.formLabel}>Confirmar Contraseña</label>
          <input
            type="password"
            id="confirm-password"
            className={styles.formInput}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.formButton}>
            Registrar
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

export default RegisterForm;
