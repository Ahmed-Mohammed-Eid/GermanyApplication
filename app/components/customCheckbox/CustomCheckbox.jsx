"use client";

import React, {useState} from 'react';
import './Checkbox.css'; // Import CSS for styling

const Checkbox = ({onChange, isChecked}) => {

    const toggleCheckbox = () => {
        onChange();
    };

    return (
        <div className="checkbox-wrapper">
            <div className="cbx" onClick={toggleCheckbox}>
                <input type="checkbox" id="cbx" checked={isChecked} onChange={() => {
                }}/>
                <label htmlFor="cbx"></label>
                <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
            </div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                        <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix"
                                       in="blur"></feColorMatrix>
                        <feBlend in2="goo" in="SourceGraphic"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default Checkbox;
