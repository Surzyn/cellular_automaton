export default function generateInitialValue(size) {
    var arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = false;
    }
    arr[Math.floor(size / 2)] = true;
    return arr;
}