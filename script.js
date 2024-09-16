function secondHighest(arr) {
    // Check if the array has fewer than 2 elements or all elements are the same
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    // Loop through the array to find the highest and second highest elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;  // Update second highest to the old highest
            highest = arr[i];         // Set new highest
        } else if (arr[i] > secondHighest && arr[i] !== highest) {
            secondHighest = arr[i];   // Set new second highest if it's not equal to the highest
        }
    }

    // If second highest is still -Infinity, it means all elements are the same
    return secondHighest === -Infinity ? -Infinity : secondHighest;
}
