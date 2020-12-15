const fs = require('fs');
let fileC = fs.readFileSync("./traveltree.txt", 'utf-8').split("\r\n");
//console.log(fileContent[0]);
//console.log(fileContent[0][30]);
//console.log(fileContent[0].length);
//console.log(fileContent.length);
//console.log(12 % 31);
//console.log(fileC);
//let stepSide = 3;
//let stepDown = 1;
let fileContent = [];
for (let k = 0; k < fileC.length; k++) {
    fileContent[k] = fileC[k].split("");
}
//console.log(fileContent);
function tree(stepSide, stepDown) {
    let treecaunt = 0;
    let b = 0;
    for (let i = 0; i < fileContent.length; i += stepDown) {
        //console.log(b);
        if (b > 30) {
            for (let j = 0; j < stepSide; j++) {
                if (b === (31 + j)) { b = 0 + j; }
            }
            //if (b === 32) { b = 1; }
            //if (b === 33) { b = 2; }
        }

        //console.log(b);
        if (fileContent[i][b] === "#") {
            //fileContent[i][b] = "X";
            treecaunt++;
            //b += 3;
        }
        //else { fileContent[i][b] = "O"; }
        //console.log(fileContent[i].join(""));
        b += stepSide;

        //console.log(b);
    }
    console.log(treecaunt);
    return treecaunt;
}
tree(1, 1);
tree(3, 1);
tree(5, 1);
tree(7, 1);
//tree(7, 1);
tree(1, 2);
