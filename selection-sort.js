const arrayGenerator = require('./array-generator');

const findMin = arr => {
    let min = arr[0];
    let minIndex = 0;
    for (let index in arr) {
        if (arr[index] < min) {
            min = arr[index];
            minIndex = index;
        }
    }
    return minIndex;
}

const selectionSort = arr => {
    const newArr = [];
    
    while (arr.length) {
        let minIndex = findMin(arr);
        newArr.push(arr[minIndex]);
        arr.splice(minIndex, 1);
    }
    return newArr;
}

const arr = arrayGenerator(50);

console.log(selectionSort(arr));