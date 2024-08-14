//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) return -Infinity; // Check if the array has fewer than 2 elements

    // Create a Set to get unique elements
    const uniqueElements = new Set(arr);
    
    // Convert Set to Array and sort in descending order
    const sortedUniqueElements = Array.from(uniqueElements).sort((a, b) => b - a);
    
    // Check if we have at least 2 unique elements
    if (sortedUniqueElements.length < 2) return -Infinity;
    
    // Return the second highest element
    return sortedUniqueElements[1];
}

