import React, { useState } from 'react';

const UserInputForm = ({ handleUserInput }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with inputs:', inputs);
    handleUserInput(inputs);
    setInputs({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h2>User Input Form:</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Name:</label>
            <input type="text" name="name" value={inputs.name} onChange={handleChange} />
          </li>
          <li>
            <label>Email:</label>
            <input type="email" name="email" value={inputs.email} onChange={handleChange} />
          </li>
          <li>
            <label>Message:</label>
            <textarea name="message" value={inputs.message} onChange={handleChange}></textarea>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInputForm;
