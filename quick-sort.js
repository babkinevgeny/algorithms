const partition = (arr, low, high) => {
    const pivot = arr[Math.floor((low + high) / 2)];

    while (high >= low) {
        while (arr[low] < pivot) {
            low++;
        }
        while (arr[high] > pivot) {
            high--;
        }
        if (high >= low) {
            [ arr[low], arr[high] ] = [ arr[high], arr[low] ];
            low++;
            high--;
        }
    }

    return low;
}

const qsort = (arr, low = 0, high = arr.length - 1) => {
    
    if (high > low) {
        const index = partition(arr, low, high);
        qsort(arr, low, index - 1);
        qsort(arr, index, high);
    }

    return arr;
}

const arr = [1,2,3,6,-3, 11, -11, 24, -42, 0];

console.log(qsort(arr));