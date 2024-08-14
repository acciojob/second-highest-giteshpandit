function secondHighest(arr) {
    // Return -Infinity for arrays with fewer than 2 elements
    if (arr.length < 2) return -Infinity;

    // Create a Set to get unique elements
    const uniqueElements = new Set(arr);

    // If we have fewer than 2 unique elements, return -Infinity
    if (uniqueElements.size < 2) return -Infinity;

    // Convert Set to Array and sort in descending order
    const sortedUniqueElements = Array.from(uniqueElements).sort((a, b) => b - a);

    // Return the second highest element
    return sortedUniqueElements[1];
}

module.exports = secondHighest;



