import React from 'react';

class InterestedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  handleButtonClick(index) {
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;

    return (
      <div style={{ padding: '20px', borderRadius: '10px' }}>
        <h2>Interesado en</h2>
        <button
          style={{ backgroundColor: selected === 0 ? 'black' : 'white', color: selected === 0 ? 'white' : 'black' }}
          onClick={() => this.handleButtonClick(0)}
        >
          Cuarto
        </button>
        <button
          style={{ backgroundColor: selected === 1 ? 'black' : 'white', color: selected === 1 ? 'white' : 'black' }}
          onClick={() => this.handleButtonClick(1)}
        >
          Departamento
        </button>
        <button
          style={{ backgroundColor: selected === 2 ? 'black' : 'white', color: selected === 2 ? 'white' : 'black' }}
          onClick={() => this.handleButtonClick(2)}
        >
          Casa
        </button>
      </div>
    );
  }
}

export default InterestedIn;
