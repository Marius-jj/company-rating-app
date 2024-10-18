import React, { useState } from "react";

type StarRatingProps = {
    rating: number;
    setRating: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0); // Track the star being hovered over

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <span
                            className={`star ${ratingValue <= (hover || rating) ? "filled" : ""}`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        >
                            &#9733;
                        </span>
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
