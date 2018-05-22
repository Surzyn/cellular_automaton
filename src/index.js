import { calculateDynamicRule } from './rules';
import generateInitialValue from './source';
import style from "./main.css";

var _size = 100;
const sourceArray = generateInitialValue(_size);


function doMagic(iterations) {
    var rule = getRule();
    var tempArray = sourceArray.slice();
    showArr(tempArray);
    for (let i = 0; i < iterations; i++) {
        var nextArr = [];
        for (let index = 0; index < tempArray.length; index++) {
            nextArr[index] = rule(tempArray[index - 1], tempArray[index], tempArray[index + 1]);
        }
        tempArray = nextArr;
        showArr(tempArray);
    }
}

doMagic(15);

function getRule() {
    var rule = document.getElementById('rule').value;
    return calculateDynamicRule(rule - 0);
}

document.getElementById('render').addEventListener("click", function (e) {
    cleanSymulation();
    doMagic(document.getElementById('maxIterations').value);
});

document.getElementById('maxIterations').addEventListener("input", function (e) {
    document.getElementById('iteration').innerHTML = e.target.value;
}, false);

function cleanSymulation() {
    document.getElementById('symulation').innerHTML = '';
}

function showArr(arr) {
    var symulationSection = document.getElementById('symulation');
    var row = document.createElement('div');
    row.className = 'row';
    for (let index = 0; index < _size; index++) {
        row.innerHTML += `<span class='item --selected-${arr[index]}'></span>`;
    }
    symulationSection.appendChild(row);
}