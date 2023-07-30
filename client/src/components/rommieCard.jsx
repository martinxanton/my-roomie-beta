import reactlogo from "../assets/react.svg";
import image from "../assets/roomie1.jpg";

function RoomieCard  () {
  return (
    <div style={styles.card}>
      <img src={image} alt='image' />
      <div style={styles.content}>
        <h3 style={styles.name}>nombre:</h3>
        <p>Location: </p>
        <p style={styles.price}>Price: </p>
        <button style={styles.button} onClick={() => console.log("Like!")}>
          Like
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px",
    marginBottom: "20px",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    position: "relative",
    objectFit: "cover",
  },
  content: {
    padding: "1px",
  },
  name: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "2px",
  },
  location: {
    fontSize: "12px",
    marginBottom: "2px",
  },
  price: {
    fontSize: "12px",
    marginBottom: "2px",
  },
  button: {
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default RoomieCard;
