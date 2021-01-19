/*

OPERATORIAI:
naudotini: >, <, >=, <=, triguba lygybe ===, !==(triguba neligybe)
ne nenaudotini: ==, !=
= reiksmes priskyrimas
== palyginama ar lygu

if (tikrinama salyga) {
    jei tenkinama    
} else {
    jei ne tenkinama
}

SABLONAI:
 if () {}
 if () {} else {}
 if () {} else if {} ....else if () {}
 if () {} else if {} ....else if () {} else {}
*/

const a = 4;
const b = 2;

const c = +b;
console.log(c);

if (a === c) {
        console.log('taip');
        console.log(a + b);
} else {
    console.log('ne')
}

console.log('---------------------');

const spalva = 'zalia';

if (spalva ==='melyna') {
    console.log('Arijai!');
} else if (spalva === 'zalia') {
    console.log('Gerai sliapasi zolej');
} else if (spalva ==='rudos') {
    console.log('Angry bird');
} else if (spalva ==='raudonos') {
    console.log('Turbut programuotojas...');
} else {
    console.log('Ar tu turi akis?');
}
 console.log('----------------------');

const moneta = 'ore';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius ');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas ');
    } else {
        if (moneta === 'briauna') {
            console.log('Tai gal iskrito briauna???');
        } else {
            console.log('tai moneta vis dar ore');
        }
     }
}
console.log('---------------------');

const namoTipas = 'namas';    //namas, butas
const kaipKilti = 'laiptai';   //laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i nama ir kylu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu i nama ir kylu liftu');
    } else {
        console.log('Ieinu i nama ir nera kaip kilti i virsu');
    }
}
 else if (namoTipas === 'butas') {
     if (kaipKilti === 'laiptai') {
         console.log('Ieinu i daugiaauksti nama ir kylu laiptais');
     } else if (kaipKilti === 'liftas') {
         console.log('Ieinu i daugiaauksti nama ir nera kaip kilti i virsu');
     } 
    } else {
        console.log('Nurodytas namo tipas nezinomas');
    }


    