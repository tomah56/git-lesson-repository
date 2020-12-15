const fs = require('fs');
//let questinAns = fs.readFileSync("./qYes.txt", 'utf-8').split("\r\n\r\n");
let questinAns = fs.readFileSync("./test.txt", 'utf-8').split("\r\n\r\n");
let inarraysLength = [];
let ansYesarrays = [];
let allYes = 0;
for (let k = 0; k < questinAns.length; k++) {
    ansYesarrays[k] = questinAns[k].split(/\r\n| /);
    inarraysLength[k] = ansYesarrays[k].length;

    ansYesarrays[k] = ansYesarrays[k].join('').split(``);

    //console.log(ansYesarrays[k], inarraysLength[k]);

}
let cauntLetters = [];
function uniq(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr[j].length; i++) {
            let temp = 0;
            console.log("i:", i);
            for (let k = 0; k < arr[j].length; k++) {
                //cauntLetters[j] = [];
                if (arr[j][i] === arr[j][k]) {
                    //arr[j].splice(i, 1);
                    temp++;
                    arr[j].splice(k, 1);
                }
                console.log(temp);
            }
            if (temp == 1) {
                allYes++;
            }
        }
    }
    return arr;
}
//console.log(allYes);
function uniqGroup(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr[j].length; i++) {
            for (let k = 0; k < arr[j].length; k++) {
                if (arr[j][i] === arr[j][k] && i !== k) {
                    //arr[j].splice(i, 1);
                    arr[j].splice(k, 1);
                }
            }
        }
    }
    return arr;
}
//console.log("ALL:", ansYesarrays);
let unifield = uniq(ansYesarrays);
//unifield = uniq(ansYesarrays);
//console.log("uniq:", unifield);
//console.log(unifield[unifield.length - 1].length);
//unifield = unifield.filter(letter => /[a-z]/.test(letter));

let sum = 0;
for (let i = 0; i < unifield.length; i++) {
    sum += unifield[i].length;
}
console.log("sum:", sum);

