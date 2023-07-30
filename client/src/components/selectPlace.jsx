import React from 'react';

class SelectPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
    };
  }

  handlePlaceChange(event) {
    this.setState({ place: event.target.value });
  }

  handleButtonClick() {
    alert(`You have entered ${this.state.place}`);
  }

  render() {
    const { place } = this.state;

    return (
      <div style={{ padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ color: '#eee', fontSize: '24px', marginBottom: '20px' }}>Escribe el lugar de tu preferencia</h2>
        <label htmlFor="place" style={{ color: '#eee', fontSize: '16px', margin: '10px' }}>Lugar:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={this.handlePlaceChange.bind(this)}
          style={{ padding: '10px', borderRadius: '5px', border: 'none', marginBottom: '20px' }}
        />
        <br />
        <button
          onClick={this.handleButtonClick.bind(this)}
          style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }}
        >
          Aceptar
        </button>
      </div>
    );
  }
}

export default SelectPlace;

