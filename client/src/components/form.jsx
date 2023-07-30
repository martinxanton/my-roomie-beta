import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ isRegister }) => {
  const [formData, setFormData] = useState({});

  const inputs = [
    { name: 'email', label: 'Correo electrónico' },
    { name: 'password', label: 'Contraseña' },
  ];

  if (isRegister) {
    inputs.unshift(
      { name: 'firstName', label: 'Nombres' },
      { name: 'lastName', label: 'Apellidos' },
      { name: 'photo', label: 'Foto de perfil' },
    );
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(({ name, label }) => (
        <div key={name}>
          <label style = {{display: 'block'}} htmlFor={name}>{label}</label>
          <input style = {{marginBottom: '8px'}} type={name === 'password' ? 'password' : 'text'} id={name} name={name} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Aceptar</button>
    </form>
  );
};

Form.propTypes = {
  isRegister: PropTypes.bool.isRequired,
};

export default Form;

