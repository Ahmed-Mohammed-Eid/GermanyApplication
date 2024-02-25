import React, { useState } from 'react';
import './CustomTextarea.css'; // Import your CSS file

const CustomTextarea = ({ labelText, onChange }) => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="wave-group">
      <textarea
          required
          className="textarea"
          value={textareaValue}
          onChange={handleTextareaChange}
      />
            <span className="bar"></span>
            <label className="label">
                {labelText.split('').map((char, index) => (
                    <span className="label-char" key={index}>{char}</span>
                ))}
            </label>
        </div>
    );
};

export default CustomTextarea;
