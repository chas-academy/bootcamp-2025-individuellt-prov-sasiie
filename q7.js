// tar två nummer och returnerar det mindre numret

export const findSmallerNumber = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(findSmallerNumber(3, 7));
