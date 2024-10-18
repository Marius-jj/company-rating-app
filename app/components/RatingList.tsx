import React, { useState } from "react";

type Rating = {
    name: string;
    rating: number;
    comment: string;
};

const mockRatings: Rating[] = [
    { name: "John Doe", rating: 5, comment: "Great place to work!" },
    { name: "Jane Smith", rating: 4, comment: "Good work-life balance." }
];

const RatingList: React.FC = () => {
    const [ratings] = useState<Rating[]>(mockRatings);

    return (
        <div>
            <h2>Employee Ratings</h2>
            {ratings.length === 0 ? (
                <p>No ratings yet.</p>
            ) : (
                <ul>
                    {ratings.map((rating, index) => (
                        <li key={index}>
                            <strong>{rating.name}</strong> rated <strong>{rating.rating}</strong>:
                            <p>{rating.comment}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RatingList;
