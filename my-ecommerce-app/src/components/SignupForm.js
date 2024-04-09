import React, { useState } from 'react';

const SignupForm = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password && confirmPassword && email && password === confirmPassword) {
      try{
        console.log("Signup form submitted with:", { username, password, email });
  
        const response = await fetch("http://localhost:3000/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username,password,email})
        });
  
        if (!response.ok){
          const errorMessage = await response.json();
          throw new Error(errorMessage.error);
        }
  
        console.log('User registered successfully!');
        setRegistrationSuccess(true);
        
      }catch (error){
        console.error('Registration Failed:', error.message);
      }
    } else {
      alert('Please make sure all fields are filled correctly.');
    }
  };

  return (
    <div>
      {registrationSuccess && <p>User Created Succesfully, return to login.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onSwitch}>Switch to Login</button>
      </form>
    </div>
  );
}

export default SignupForm;
