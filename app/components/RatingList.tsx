"use client";
import React from 'react';
import { useReviews } from '../context/ReviewContext'; // Import useReviews to access reviews

const RatingList: React.FC = () => {
    const { reviews } = useReviews(); // Get the reviews from the global context

    return (
        <div>
            <h2>Employee Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index} style={{ marginBottom: '20px' }}>
                            <strong>{review.name}</strong> reviewed <strong>{review.company}</strong>:
                            <div className="stars">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={i < review.rating ? "filled" : ""}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RatingList;
