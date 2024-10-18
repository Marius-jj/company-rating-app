"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useReviews } from "../context/ReviewContext";
import StarRating from "./StarRating";
import AsyncSelect from "react-select/async"; // Import AsyncSelect for searching companies
import ReviewsPage from './../reviews/page';
import Link from 'next/link'; // Import Next.js Link

type RatingFormInputs = {
    company: string;
    name: string;
    rating: number;
    comment: string;
};

type CompanyOption = {
    value: string;
    label: string;
};

const RatingForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<RatingFormInputs>();
    const { addReview } = useReviews();
    const [starRating, setStarRating] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Success message state

    // Load companies from the API
    const loadOptions = async (inputValue: string): Promise<CompanyOption[]> => {
        if (!inputValue) return [];

        try {
            const response = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter?navn=${inputValue}`);
            const data = await response.json();

            if (data._embedded && data._embedded.enheter) {
                return data._embedded.enheter.map((company: any) => ({
                    value: company.navn,
                    label: company.navn,
                }));
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching companies:", error);
            return [];
        }
    };

    const onSubmit = (data: RatingFormInputs) => {
        const reviewData = { ...data, rating: starRating };
        addReview(reviewData); // Add the review to the global context

        // Show success message and reset the form
        setShowSuccessMessage(true);
        reset(); // Reset form fields
        setStarRating(0); // Reset star rating
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Searchable dropdown for companies */}
                <div>
                    <label htmlFor="company">Select Company</label>
                    <AsyncSelect
                        cacheOptions
                        loadOptions={loadOptions}
                        placeholder="Search for a company"
                        onChange={(selectedOption: CompanyOption | null) => setValue("company", selectedOption?.value || "")}
                    />
                    {errors.company && <span>This field is required</span>}
                </div>

                {/* Star Rating */}
                <div>
                    <label htmlFor="rating">Rating</label>
                    <StarRating rating={starRating} setRating={setStarRating} />
                </div>

                {/* Name input */}
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                {/* Comment input */}
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" {...register("comment")} />
                </div>

                <button type="submit">Submit Rating</button>
            </form>



            {/* Success message with options */}
            {showSuccessMessage && (
                <div className="success-message">
                    <h3>Thank you! Your review has been submitted successfully.</h3>
                    <button onClick={() => setShowSuccessMessage(false)}>Submit Another Review</button>
                    <Link href="/reviews" className="view-reviews-btn">View Submitted Reviews</Link> {/* No need for <a> */}
                </div>
            )}



        </div>
    );
};

export default RatingForm;
