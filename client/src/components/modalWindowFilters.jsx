import React from 'react';
import Filters from '../pages/filters';
//import './modal.css';

class ModalWindowFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button onClick={this.handleOpenModal.bind(this)}>Open Modal</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <Filters />
              <button onClick={this.handleCloseModal.bind(this)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalWindowFilters;
