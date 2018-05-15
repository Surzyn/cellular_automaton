import rule30 from './rules';
import generateInitialValue from './source';
import style from "./main.css";

var _size = 31;
const sourceArray = generateInitialValue(_size);

function doMagic(iterations) {
    var tempArray = sourceArray.slice();
    showArr(tempArray);
    for (let i = 0; i < iterations; i++) {
        var nextArr = [];
        for (let index = 0; index < tempArray.length; index++) {
            nextArr[index] = rule30(tempArray[index - 1], tempArray[index], tempArray[index + 1]);
        }
        tempArray = nextArr;
        showArr(tempArray);
    }
}

doMagic(15);

document.getElementById('maxIterations').addEventListener("input", function (e) {
    cleanSymulation();
    doMagic(e.target.value);
    document.getElementById('iteration').innerHTML = e.target.value;
}, false);

function showArr(arr) {
    var symulationSection = document.getElementById('symulation');
    var row = document.createElement('div');
    row.className = 'row';
    for (let index = 0; index < _size; index++) {
        row.innerHTML += `<span class='item --selected-${arr[index]}'></span>`;
    }
    symulationSection.appendChild(row);
}

function cleanSymulation() {
    document.getElementById('symulation').innerHTML = '';
}