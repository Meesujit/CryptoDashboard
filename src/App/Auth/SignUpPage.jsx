// src/components/SignUp.js
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
