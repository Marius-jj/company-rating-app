import React from 'react';
import RatingList from '../components/RatingList'; // Reusing the RatingList component

const ReviewsPage: React.FC = () => {
    return (
        <div>
            <h1>Employee Reviews</h1>
            <RatingList />
        </div>
    );
};

export default ReviewsPage;
