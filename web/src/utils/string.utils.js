export const trimString = (str, maxLength) => {
    if (!str) {
        return '';
    }
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
};

export const toTitleCase = (str) => {
    if (!str) {
        return '';
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
};