import React from 'react';

const Navbar = ({ onFilterClick }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navLinks}>
        <a href="#inicio">Inicio</a>
        <a href="#habitaciones">Habitaciones</a>
        <a href="#contacto">Contacto</a>
        <a href="#Mensajeria">Mensajeria</a>
      </div>
      <button style={styles.filterButton} onClick={onFilterClick}>Filtrar</button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#f2f2f2',
    padding: '0.5rem',
    display: 'flex',
    position: 'fixed',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    top: '65px',
    left: 0,
  },
  navLinks: {
    display: 'flex',
    marginLeft: '3rem',
    gap: '9rem',
  },
  filterButton: {
    padding: '0.5rem 1rem',
    margin: '0 2rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Navbar;
