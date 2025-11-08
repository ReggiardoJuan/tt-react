import { useState } from 'react';

import FormField from '../FormField/FormField.component';
import { email, maxLength, minLength, phone, required } from '../FormField/FormField.validation';

function ContactForm() {
    const [fieldErrors, setFieldErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (fieldErrors.length === 0) {
            alert('Formulario enviado correctamente');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormField label="Nombre" name="nombre" required validations={[required]} placeholder="Peter Smith" />
                <FormField
                    type="email"
                    label="Email"
                    name="email"
                    required
                    validations={[required, email]}
                    placeholder="email@domain.com"
                />
                <FormField
                    label="Teléfono"
                    name="telefono"
                    required
                    validations={[required, phone]}
                    placeholder="11 11111111"
                />
                <FormField
                    as="textarea"
                    label="Mensaje"
                    name="mensaje"
                    required
                    validations={[required, minLength(10), maxLength(250)]}
                    description="Entre 10 y 250 caracteres"
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default ContactForm;
