import React, { useState } from 'react';
import { Input } from './style';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return (
    <Input type="text" value={searchTerm} onChange={handleChange} />
  );
}

export default SearchInput;