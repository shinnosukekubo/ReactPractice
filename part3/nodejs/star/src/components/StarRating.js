import React, { useState } from "react";
import { render } from "react-dom";
import { FaStar } from "react-icons/fa";

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
    return (
        <>
            {[...Array(totalStars)].map((n, i) => 
                <Star
                    key = {i}
                    selected={selectedStars > i} />
                )}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
};