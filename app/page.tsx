"use client"; // Add this if the parent component needs to be a Client Component

import React from "react";
import RatingForm from "./components/RatingForm";
import RatingList from "./components/RatingList";

const HomePage: React.FC = () => {
  return (
    <main>
      <h1>Rate Your Company</h1>
      <RatingForm />
      <RatingList />
    </main>
  );
};

export default HomePage;
