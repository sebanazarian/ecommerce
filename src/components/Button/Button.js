import React from 'react';

export const Button = ({ children, className, mt = 0, mb = 1, color = '', ...rest }) => {
    return (
        <div className={`form-group mt-${mt} mb-${mb}`}>
            <button className={`BtnSubmit BtnAction BorderAll ${color ? `BtnAction--${color}` : ''} ${className}`} {...rest}>
                {children}
            </button>
        </div>
    )
}
