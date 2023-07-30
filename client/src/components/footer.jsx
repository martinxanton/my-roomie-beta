const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} myRoomie. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000000',
    padding: '0.5px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  },
};

export default Footer;
