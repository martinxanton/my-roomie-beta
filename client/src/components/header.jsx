import React from 'react';
import SearchBar from './SearchBar';
import reactlogo from '../assets/react.svg';

const Header = () => {
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
  };
  return (
    <header  style={styles.header}>
      
      {/* Logo */}
      <div className="logo" style={{height:'2px', display: 'flex', alignItems: 'center' }}>
        <img src={reactlogo} alt="Logo de tu proyecto" />
        <h1  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>myRoomie</h1>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar" style={{ display: 'flex' }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Icono de inicio de sesión */}
      <div className="login-icon"  style={{ margin: '20px' , width: '30px', height: '30px' }}>
        {/* Aquí puedes agregar el ícono de inicio de sesión. Puedes usar una imagen o una fuente de iconos */}
        <img src={reactlogo} alt="Icono de inicio de sesión" />
      </div>
    </header>
  );
};
  const styles = {
    header: {
      backgroundColor: '#000000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0
    }
  };
export default Header;
