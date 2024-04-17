import React, { useState } from 'react';
import LoginForm from '../Componentes/InicioSesion'; // Asegúrate de crear este componente
import RegisterForm from '../Componentes/Registro'; // Asegúrate de crear este componente
import styles from '../StylesComponents/UserOptions.module.css';

const UserOptions = () => {
  const [activeForm, setActiveForm] = useState(null);

  // Función para cerrar los formularios y volver a mostrar los botones
  const closeForm = () => setActiveForm(null);

  return (
    <div className={styles.optionsContainer}>
      {!activeForm && ( // Condición para mostrar solo si no hay formulario activo
        <>
          <button onClick={() => setActiveForm('login')} className={styles.optionButton}>
            Iniciar sesión
          </button>
          <button onClick={() => setActiveForm('register')} className={styles.optionButton}>
            Registrarse
          </button>
        </>
      )}
      
      {activeForm === 'login' && <LoginForm onClose={closeForm} />}
      {activeForm === 'register' && <RegisterForm onClose={closeForm} />}
    </div>
  );
};

export default UserOptions;
