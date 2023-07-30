import React from 'react';
import InterestedIn from '../components/interestedIn';
import SelectPlace from '../components/selectPlace';
import DistanceFromPlace from '../components/distanceFromPlace';
import Prices from '../components/prices';

class Filters extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ color: '#eee', fontSize: '36px', marginBottom: '20px' }}>Filtros</h1>
        <InterestedIn />
        <SelectPlace />
        <DistanceFromPlace />
        <Prices />
      </div>
    );
  }
}

export default Filters;
