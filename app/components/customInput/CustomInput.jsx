"use client";

import React, { useState } from 'react';
import './CustomInput.css'; // Import your CSS file

const CustomInput = ({ labelText , onChange, type}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="wave-group">
            <input
                required
                type={type ? type : 'text'}
                className="input"
                value={inputValue}
                onChange={handleInputChange}
            />
            <span className="bar"></span>
            <label className="label">
                {labelText.split('').map((char, index) => (
                    <span className="label-char" key={index}>{char !== ' ' ? char : '\u00A0'}</span>
                ))}
            </label>
        </div>
    );
};

export default CustomInput;
