export const sumValuesFromItems = (items, key) => {
    return items.reduce((acc, item) => acc + item[key], 0);
};

export const sanitizeItemList = (items) => {
    return items.map(item => {
        const sanitizedItem = {};

        if (typeof item.id === 'string') {
            sanitizedItem.id = item.id.trim();
        } else {
            sanitizedItem.id = item.id;
        }
        const parsedCantidad = parseInt(item.cantidad, 10) || 0;
        sanitizedItem.cantidad = Math.max(0, parsedCantidad);

        return sanitizedItem;
    });
};
