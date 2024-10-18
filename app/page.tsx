"use client"; // This is necessary if the parent component uses client-side hooks

import React from 'react';
import RatingForm from './components/RatingForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Submit Your Company Review</h1>
      <RatingForm />
    </div>
  );
};

export default HomePage;
