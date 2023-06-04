import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {

  // Here I use three different useState functions to return 3 different states and set them to blank strings initially.
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Next I 
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ first_name, last_name, email });
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
            First Name: <br />
            <input type="text" value={first_name} placeholder='First Name (i.e. John)' onChange={(e) => setFirstName(e.target.value)} required />
            </label>
        <label>
            Last Name: <br />
            <input type="text" value={last_name} placeholder='Last Name (i.e. Hamm)' onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <label>
            Email: <br />
            <input type="email" value={email} placeholder='JohnHamm@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Submit Review</button>
    </form>
    </div>
  );
};

export default CustomerForm;