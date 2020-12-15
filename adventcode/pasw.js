const fs = require('fs');
let fileContent = fs.readFileSync("./pasw.txt", 'utf-8').split("\r\n");
//fileContent = parseInt(fileContent);
let crit = [];
for (let i = 0; i < fileContent.length; i++) {
    crit[i] = fileContent[i].split(/-|\s|:\s/);
}
let goodCaunt = 0;
for (let i = 0; i < fileContent.length; i++) {
    //if (check(crit[i])) { goodCaunt++ }
    if (checktwo(crit[i])) { goodCaunt++ }
}
//console.log(crit.length);
//console.log(crit[0][0]);
console.log(goodCaunt);
function checktwo(arr) {
    let letterCount = 0;
    if (arr[3].split("")[arr[0] - 1] == arr[2]) { letterCount++ }
    if (arr[3].split("")[arr[1] - 1] == arr[2]) { letterCount++ }
    if (letterCount === 1) {
        //console.log(arr);
        return true;
    }
}
function check(arr) {
    let letterCount = 0;
    arr[3].split("").forEach(letter => {
        if (letter == arr[2]) {
            letterCount++;
        }
    });
    if (arr[0] <= letterCount && arr[1] >= letterCount) {
        //console.log(arr);
        return true;
    }
}

//sole.log(fileContent[7] + fileContent[25]);
/*
for (let i = 0; i < fileContent.length; i++) {
    for (let j = 0; j < fileContent.length; j++) {
        for (let k = 0; k < fileContent.length; k++) {


            let sum = parseInt(fileContent[i]) + parseInt(fileContent[j]) + parseInt(fileContent[k]);

            if (sum == 2020 && i !== j) {
                let multi = parseInt(fileContent[i]) * parseInt(fileContent[j]) * parseInt(fileContent[k]);
                console.log(` ${sum} = ${fileContent[i]} + ${fileContent[j]} + + ${fileContent[k]} szorzat :  ${multi}`
                );
            }
        }
    }

}

*/