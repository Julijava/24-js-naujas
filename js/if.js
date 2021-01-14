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
 if () { else {}
if () {} else 


*/

const a = 400;
const b = '400';

const c = +b;
console.log(c);

if (a === c) {
        console.log('taip');
        console.log(a + b);
} else {
    console.log('ne')
}

console.log('---------------------');

const spalva = 'rudos';

if (spalva ==='melyna') {
    console.log('Arijai!');
} else if (spalva === 'zalia') {
    console.log('Gerai sliapasi zolej');
} else if (spalva ==='rudos') {
    console.log('Angry bird');
} else if (spalva ==='raudonos') {
    console.log('Turbut programuotojas...');
} else {
    console.log('Ar tu turi akia?');
}

const moneta = 'briauna';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius ');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas ');
    } else {
        console.log('Tai gal iskrito briauna???');
    }
}

console.log('---------------------');

const namoTipas = 'namas';    //namas, butas
const kaipKilti = 'laiptai';   //laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
        
    }
  
}
    