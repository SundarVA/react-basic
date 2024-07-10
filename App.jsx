import React, { useState } from 'react';
import UserInputForm from './UserInputForm';
import DisplayUserInput from './DisplayUserInput';

const App = () => {
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <div>
      <h1>Controlled Form </h1>
      <UserInputForm handleUserInput={handleUserInput} />
      <DisplayUserInput userInput={userInput} />
    </div>
  );
};

export default App;
