const fs = require('fs');
let fileContent = fs.readFileSync("./numbers.txt", 'utf-8').split("\r\n");
//fileContent = parseInt(fileContent);


//console.log(fileContent[7] + fileContent[25]);
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

