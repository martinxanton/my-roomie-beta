import React from 'react';

class DistanceFromPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
    };
  }

  handleDistanceChange(event) {
    this.setState({ distance: event.target.value });
  }

  render() {
    const { distance } = this.state;

    return (
      <div style={{ padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ color: '#eee', fontSize: '24px', marginBottom: '20px' }}>Selecciona una distancia máxima</h2>
        <label htmlFor="distance" style={{ color: '#eee', fontSize: '16px', margin: '10px' }}>Distancia:</label>
        <select
          id="distance"
          value={distance}
          onChange={this.handleDistanceChange.bind(this)}
          style={{ padding: '10px', borderRadius: '5px', border: 'none', marginBottom: '20px' }}
        >
          <option value="">Por favor, selecciona una opción</option>
          <option value="5">5 km</option>
          <option value="10">10 km</option>
          <option value="20">20 km</option>
          <option value="50">50 km</option>
        </select>
      </div>
    );
  }
}

export default DistanceFromPlace;
