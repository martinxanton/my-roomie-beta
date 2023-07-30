import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input style={{padding: '8px' , margin:'5px' ,width:'12rem'}}
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" style={{padding: '8px' , margin:'1px'}}>Buscar</button>
    </form>
  );
};

export default SearchBar;
