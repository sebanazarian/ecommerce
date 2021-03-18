import React, { useEffect, useRef } from 'react';

export const Input = ({ errors, ...rest }) => {
    if (rest.value == null)
        rest.value = '';

    return (
        <div className="form-group">
            <input className={`Input BorderAll form-control ${rest.value ? 'TextVioleta' : ''} ${errors ? 'is-invalid' : ''}`} {...rest} />
            {
                errors && errors.map((message, index) => (
                    <div className="invalid-feedback" key={index}>
                        {message}
                    </div>
                ))
            }
        </div>
    )
}
