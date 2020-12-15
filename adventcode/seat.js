const fs = require('fs');
//let seats = fs.readFileSync("./test.txt", 'utf-8').split("\r\n");
let seats = fs.readFileSync("./seat.txt", 'utf-8').split("\r\n");
let seatShort = [];
let rowcaunts = [];
let culomcaunts = [];
let culumBin = [];
let rowBin = [];
let id = [];
for (let k = 0; k < seats.length; k++) {
    seatShort[k] = seats[k].split(/(L|R)/);
    culomcaunts[k] = seatShort[k][1] + seatShort[k][3] + seatShort[k][5];
    rowcaunts[k] = seatShort[k][0];
    rowBin[k] = [];
    for (let i = 0; i < rowcaunts[0].length; i++) {
        let single = rowcaunts[k].split("")[i];
        if (single === "B") {
            rowBin[k][i] = 1;
        }
        else {
            rowBin[k][i] = 0;
        }
    }
    culumBin[k] = [];
    for (let i = 0; i < culomcaunts[0].length; i++) {
        let single = culomcaunts[k].split("")[i];
        if (single === "R") {
            culumBin[k][i] = 1;
        }
        else {
            culumBin[k][i] = 0;
        }
    }
    culumBin[k] = parseInt(culumBin[k].join(""), 2);
    rowBin[k] = parseInt(rowBin[k].join(""), 2);
    id[k] = 8 * rowBin[k] + culumBin[k];
}
let mySeat = 0;
id = id.sort((a, b) => b - a);
for (let j = 0; j < id.length; j++) {
    if (((id[j]) - 1) !== (id[j + 1]) && id[j + 1] !== undefined) {
        mySeat = id[j] - 1;
    }
}
console.log(mySeat);