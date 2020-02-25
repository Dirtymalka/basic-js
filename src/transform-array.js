module.exports = function transform(arr) {
    let arr2 = [];

    if (!Array.isArray(arr)) throw new Error('Error');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-prev' && i != 0 && arr[i - 1] != '--double-next' && arr[i - 1] != '--discard-prev' && arr[i - 1] != '--discard-next') arr2.push(arr[i - 1]);
        if (arr[i] === '--double-next' && i != arr.length - 1 && arr[i + 1] != '--double-prev' && arr[i + 1] != '--discard-prev' && arr[i + 1] != '--discard-next') arr2.push(arr[i + 1]);

        if (arr[i] === '--discard-prev') { arr2.splice(arr2.length - 1, 1); continue; }
        if (arr[i] === '--discard-next') { i++; continue; }

        if (arr[i] === '--double-next' || arr[i] === '--discard-prev' || arr[i] === '--discard-next' || arr[i] === '--double-prev') {
            continue;
        }
        arr2.push(arr[i]);
    }
    return arr2;
};
