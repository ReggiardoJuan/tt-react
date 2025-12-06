// La forma más limpia es poner todas las validaciones en un archivo aparte (ej: validation.js)

export const required = (value) => {
    if (!value || String(value).trim() === '') {
        return 'El campo es obligatorio';
    }
    return null;
};

export const email = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
        return 'El campo debe ser un correo electrónico válido';
    }
    return null ;
};

export const phone = (value) => {
    const phoneRegex = /^\d{11}$/;
    if (!value) {
        return null;
    }
    if (!phoneRegex.test(value)) {
        return 'El campo debe ser un número de teléfono válido (11 dígitos)';
    }
    return null;
};

export const price = (value) => {
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    if (!value) {
        return null;
    }
    if (!priceRegex.test(value)) {
        return 'El campo debe ser un precio válido (número y decimal)';
    }
    return null;
};

export const number = (value) => {
    const numberRegex = /^\d+$/;
    if (!value) {
        return null;
    }
    if (!numberRegex.test(value)) {
        return 'El campo debe ser un número';
    }
    return null;
};

export const minLength = (min) => (value) => {
    const trimmedValue = String(value || '').trim();
    if (!value) {
        return null;
    }
    if (trimmedValue.length < min) {
        return 'El campo debe tener al menos ' + min + ' caracteres';
    }
    return null;
};

export const maxLength = (max) => (value) => {
    const trimmedValue = String(value || '').trim();
    if (!value) {
        return null;
    }
    if (trimmedValue.length > max) {
        return 'El campo no debe tener más de ' + max + ' caracteres';
    }
    return null;
};