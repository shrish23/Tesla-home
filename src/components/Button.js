import React from 'react'

import './Button.css';

function Button({inp, text, link}) {
    return (
        <div className={`button ${inp === 'secondary' ? 'button_white': ''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Button
