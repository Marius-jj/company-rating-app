import React from 'react';
import RatingList from '../components/RatingList'; // Ensure the correct path

const ReviewsPage: React.FC = () => {
    return (
        <div>
            <h1>All Reviews</h1>
            <RatingList /> {/* Display the list of reviews */}
        </div>
    );
};

export default ReviewsPage;
