"use client"; // This must be at the top to mark it as a Client Component

import React from 'react';
import { useForm } from 'react-hook-form';

type RatingFormInputs = {
    name: string;
    rating: number;
    comment: string;
};

const RatingForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RatingFormInputs>();

    const onSubmit = (data: RatingFormInputs) => {
        console.log(data); // In a real-world scenario, you'd send this data to a backend.
        alert("Rating submitted!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Your Name</label>
                <input
                    id="name"
                    type="text"
                    {...register('name', { required: true })}
                />
                {errors.name && <span>This field is required</span>}
            </div>

            <div>
                <label htmlFor="rating">Rating (1-5)</label>
                <input
                    id="rating"
                    type="number"
                    {...register('rating', { required: true, min: 1, max: 5 })}
                />
                {errors.rating && <span>Please provide a rating between 1 and 5</span>}
            </div>

            <div>
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" {...register('comment')} />
            </div>

            <button type="submit">Submit Rating</button>
        </form>
    );
};

export default RatingForm;
