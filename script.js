function secondHighest(arr) {
    // If the array is empty or has only one element, return undefined
    if (arr.length < 2) {
        return undefined;
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    // Loop through the array to find the highest and second-highest elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] > secondHighest && arr[i] !== highest) {
            secondHighest = arr[i];
        }
    }

    // If all elements are the same, return the highest element
    if (secondHighest === -Infinity) {
        return highest;
    }

    return secondHighest;
}
