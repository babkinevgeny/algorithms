const arrayGenerator = (n, max = 100) => {
    const arr = [];

    for (let i = n; i > 0; i--) {
        let num = Math.round(Math.random()* max);
        num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // it gives 50/50 changes to get positive or negative number;
        arr.push(num);
    }

    return arr;
}

module.exports = arrayGenerator;