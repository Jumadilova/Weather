import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM!</span>
           <span  className="wrong">Wrong</span>
        </div>
    )
}
export default ErrorIndicator;