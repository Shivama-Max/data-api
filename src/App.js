import './App.css';
import React, { useState } from 'react';
import Fields from './components/Fields';
import Dropdown from './components/Dropdown';
import List from './components/List';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
    // Additional logic based on selected option
  };
  return (
    <>
    <Dropdown onSelect={handleSelect}/>
    <Fields/>
    </>
  );
}

export default App;
