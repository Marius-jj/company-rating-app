"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Review = {
    company: string;
    name: string;
    rating: number;
    comment: string;
};

type ReviewContextType = {
    reviews: Review[];
    addReview: (review: Review) => void;
};

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const useReviews = () => {
    const context = useContext(ReviewContext);
    if (!context) {
        throw new Error("useReviews must be used within a ReviewProvider");
    }
    return context;
};

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    const addReview = (review: Review) => {
        setReviews((prevReviews) => [...prevReviews, review]);
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview }}>
            {children}
        </ReviewContext.Provider>
    );
};
