import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Prices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
    };
  }

  handleMinChange(value) {
    this.setState({ min: value });
  }

  handleMaxChange(value) {
    this.setState({ max: value });
  }

  render() {
    const { min, max } = this.state;

    return (
      <div style={{ padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ color: '#eee', fontSize: '24px', marginBottom: '20px' }}>Precios</h2>
        <label htmlFor="min" style={{ color: '#eee', fontSize: '16px' }}>Mínimo en soles:</label>
        <Slider
          id="min"
          min={100}
          max={1000}
          value={min}
          onChange={this.handleMinChange.bind(this)}
        />
        <label htmlFor="max" style={{ color: '#eee', fontSize: '16px' }}>Máximo en soles:</label>
        <Slider
          id="max"
          min={100}
          max={1000}
          value={max}
          onChange={this.handleMaxChange.bind(this)}
        />
      </div>
    );
  }
}

export default Prices;
