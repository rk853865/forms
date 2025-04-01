import React, { useState } from 'react';

const NameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous error message
        setError('');

        // Validate input fields
        if (!firstName || !lastName) {
            setError('Both fields are required.');
            return;
        }

        // Set the full name
        setFullName(`${firstName} ${lastName}`);
    };

    return (
        <div>
            <h1>Enter Your Name</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br /><br />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {fullName && <h2>Full Name: {fullName}</h2>}
        </div>
    );
};

export default NameForm;
