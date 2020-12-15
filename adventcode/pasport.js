const fs = require('fs');
//let paspconent = fs.readFileSync("./pasport.txt", 'utf-8').split("\r\n\r\n");
let paspconent = fs.readFileSync("./pastest.txt", 'utf-8').split("\r\n\r\n");

let fileContent = [];
for (let k = 0; k < paspconent.length; k++) {
    fileContent[k] = paspconent[k].split(/\r\n| /);
}
let validCaunt = 0;
let simplecaunt = 0;
let bedcaunt = 0;
for (let i = 0; i < fileContent.length; i++) {
    fileContent[i].sort();
    if (fileContent[i].length === 8) {
        // console.log(fileContent[i]);
        simplecaunt++;
        let year = fileContent[i][0].split(":")[1]; //byr
        let year1 = fileContent[i][3].split(":")[1]; //eyr
        let year2 = fileContent[i][6].split(":")[1]; //iyr
        let ecl = fileContent[i][2].split(":")[1]; // ecl
        let hcl = fileContent[i][4].split(/(#)/); //done
        let hgtin = fileContent[i][5].split(":")[1].split("in"); //done
        let hgtcm = fileContent[i][5].split(":")[1].split("cm");    //done
        let pid = fileContent[i][7].split(":")[1]; // done
        //console.log(fileContent[i][0].split(":")[1]);
        //console.log(hcl[2].split(/([a-f|\d])/).length);
        //console.log(ecl);
        if (year >= 1920 && year <= 2002) {
            if (year1 >= 2020 && year1 <= 2030) {
                if (year2 >= 2010 && year2 <= 2020) {
                    if (pid.length === 9 && !isNaN(pid * 1)) {
                        if (hcl.length === 3 && hcl[2].split(/([a-f|\d])/).length === 13) {
                            if (ecl === "amb" || ecl === "blu" || ecl === "brn" || ecl === "gry" || ecl === "grn " || ecl === "hzl" || ecl === "oth") {
                                if (hgtin.length === 2 && !isNaN(hgtin[0] * 1) && hgtin[0] >= 59 && hgtin[0] <= 76) { validCaunt++ }
                                else if (hgtcm.length === 2 && !isNaN(hgtcm[0] * 1) && hgtcm[0] >= 150 && hgtcm[0] <= 193) { validCaunt++ }
                                else {
                                    //bedcaunt++;
                                    //console.log("in the end 8", fileContent[i]); 
                                }
                            } //ecl
                        } //hcl
                    } //pid
                } //iyr
            }//byr
        }//eyr
        else {
            bedcaunt++
            // console.log("rossz:", fileContent[i]); 
        }
        // hgt
        // 
        //

    }
    else if (fileContent[i].length === 7) {
        let temp = fileContent[i].join(",").match("cid:")
        if (temp == null) {
            simplecaunt++;
            //console.log("whitout cid", fileContent[i]);
            let year = fileContent[i][0].split(":")[1]; //byr
            let year1 = fileContent[i][2].split(":")[1]; //eyr
            let year2 = fileContent[i][5].split(":")[1]; //iyr
            let ecl = fileContent[i][1].split(":")[1]; // ecl
            let hcl = fileContent[i][3].split(/(#)/); //done
            let hgtin = fileContent[i][4].split(":")[1].split("in"); //done
            let hgtcm = fileContent[i][4].split(":")[1].split("cm");    //done
            let pid = fileContent[i][6].split(":")[1]; // done
            //console.log(fileContent[i][0].split(":")[1]);
            //console.log(hcl[2].split(/([a-f|\d])/).length);
            //console.log(ecl);
            //console.log(hgtin[0] * 1);
            if (year >= 1920 && year <= 2002) {
                if (year1 >= 2020 && year1 <= 2030) {
                    if (year2 >= 2010 && year2 <= 2020) {
                        if (pid.length === 9 && !isNaN(pid * 1)) {
                            if (hcl.length === 3 && hcl[2].split(/([a-f|\d])/).length === 13) {
                                if (ecl === "amb" || ecl === "blu" || ecl === "brn" || ecl === "gry" || ecl === "grn " || ecl === "hzl" || ecl === "oth") {
                                    if (hgtin.length === 2 && !isNaN(hgtin[0] * 1) && hgtin[0] >= 59 && hgtin[0] <= 76) { validCaunt++ }
                                    else if (hgtcm.length === 2 && !isNaN(hgtcm[0] * 1) && hgtcm[0] >= 150 && hgtcm[0] <= 193) { validCaunt++ }
                                    else {
                                        //bedcaunt++;
                                        //console.log("in the end 7", fileContent[i]); 
                                    }
                                } //ecl
                            } //hcl
                        } //pid
                    } //iyr
                }//byr
            }//eyr
            else {
                bedcaunt++;
                //console.log("its 7 nbut bed:", fileContent[i]); 
            }
        }
        else {
            bedcaunt++;
            // console.log("if not hat:", fileContent[i]); 
        }
    }
    else { bedcaunt++ }
}
//function getYear() {}
console.log(simplecaunt);
console.log(validCaunt);
console.log("bed:", bedcaunt);

//console.log(fileContent[0]);
//console.log(fileContent[2]);
//console.log(fileContent[14]);

