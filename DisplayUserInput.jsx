import React from 'react';

const DisplayUserInput = ({ userInput }) => {
  console.log('Displaying user input:', userInput);
  
  return (
    <div>
      <h2>User Input:</h2>
      <ul>
        <li><strong>Name:</strong> {userInput.name}</li>
        <li><strong>Email:</strong> {userInput.email}</li>
        <li><strong>Message:</strong> {userInput.message}</li>
      </ul>
    </div>
  );
};

export default DisplayUserInput;
