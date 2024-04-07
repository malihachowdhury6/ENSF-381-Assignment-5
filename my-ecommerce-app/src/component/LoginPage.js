import React, { useState } from 'react';
import Header from './Header'; // Assume you've already created this
import Footer from './Footer'; // Assume you've already created this
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Header />
      {showSignup ? (
        <SignupForm onSwitch={() => setShowSignup(false)} />
      ) : (
        <LoginForm onSwitch={() => setShowSignup(true)} />
      )}
      <Footer />
    </div>
  );
}

export default LoginPage;
