import { useState } from 'react';

import styles from './FormField.module.css';

export default function FormField({ as = 'input', type = 'text', label, name, required, options, validations = [], description, ...rest }) {
    const Element = as;
    const [error, setError] = useState(null);
    const [value, setValue] = useState('');

    const validar = (currentValue) => {
        const mappedValidations = validations.map((validation) => validation(currentValue));
        const firstError = mappedValidations.find((validation) => validation);
        setError(firstError || null);
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        validar(newValue);
    };

    const handleBlur = (event) => {
        validar(event.target.value);
    };

    return (
        <div className={styles['form-field']}>
            <label htmlFor={name}>
                {label} {required && <span className={styles['req-symbol']}>*</span>}
            </label>
            <Element
                id={name}
                type={type}
                name={name}
                aria-invalid={error ? 'true' : ''}
                onBlur={handleBlur}
                onChange={handleChange}
                value={value}
                {...rest}
            >
                { options && [
                    <option key="placeholder" value="" disabled>Selecciona una opción</option>,
                    ...options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                ]}
            </Element>
            {error && <small id={styles['valid-helper']}>{error}</small>}
            {!error && description && <small id={styles['description-helper']}>{description}</small>}
        </div>
    );
}
