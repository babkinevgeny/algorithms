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

const arr = [1,2,3,6,-3, 11, -11, 24, -42, 0];

console.log(selectionSort(arr));