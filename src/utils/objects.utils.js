export const sumValuesFromItems = (items, key) => {
    return items.reduce((acc, item) => acc + item[key], 0);
};
