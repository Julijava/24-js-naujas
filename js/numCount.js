"use strict";

/*
0 - 4       = 10 
3 - 5       = 12
-50 - 50    = 0
0 - 100     = 5050
0 - 0       = 0
574 - 815   = baisiai didelis teigiamas skaicius
-50 - 50    = 0
-70 - 30    = santykinai nedidelis neigiamas skaicius (-2020)     
*/

const from = 3;
const till = 5;
let sum = 0;

for (let i = from; i <= till; i++) {
    sum += i;

    console.log(i, sum);
}

const ats = `Suma nuo ${from} iki ${till} yra ${sum}.`;

console.log(ats);

/*
    i = 3; 3 < 5 -> true
    sum = 0 + 3 = 3
    i++ -> i = 4

i = 4; 4 <= 5 -> true
    sum = 0 + 3 = 7
    i++ -> i = 5

*/
