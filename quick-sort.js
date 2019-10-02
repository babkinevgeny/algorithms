const arrayGenerator = require('./array-generator');

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

const arr = arrayGenerator(100);

console.log(qsort(arr));