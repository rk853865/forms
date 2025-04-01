import React, { useState } from 'react';

function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  // Handles the first name input change
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // Handles the last name input change
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    // Check if both fields are filled
    if (!firstName || !lastName) {
      setError('Both fields are required');
      setFullName(''); // Clear the full name in case of error
    } else {
      setError('');
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Enter your Name</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
}

export default NameForm;
