"use strict"

const a = 4;
const b = 4;

const arLygu = a === b ? true : false;

console.log(arLygu);

const aukstai = 9;
const kadaDaugiaaukstis = 5;

const arDaugiaaukstis = aukstai >= kadaDaugiaaukstis ? 'taip' : 'ne';
console.log(arDaugiaaukstis);



const variklisIjungtas = false;

const arJudam = variklisIjungtas === true ? 'vaziuojam' : 'stovim';
console.log(arJudam);


const arAlkanas = true;

const einamValgyti = arAlkanas === true ? 'einam valgyti' : 'dar palaukim kol isalksim';
console.log(einamValgyti);


console.log('--------------------');

let alkioAtsakymas = '';
const iprociai = 'mesedis';

if (arAlkanas === true) {
    if (iprociai === 'mesedis') {
        alkioAtsakymas = 'uzkask mesytes';
    } else {
        alkioAtsakymas = 'uzkask darzoviu';
     }
    } else {
    alkioAtsakymas = 'nu, palaukim...';
}

console.log(alkioAtsakymas);

const alkioAtsakymas3 = arAlkanas === true ? iprociai === 'mesedis' ? 'uzkask mesytes' : 'uzkask darzoviu' : 'nu, palaukim...';
    console.log(alkioAtsakymas3);

const alkioAtsakymas2 = arAlkanas === true 
                            ? iprociai === 'mesedis' 
                                ? 'uzkask mesytes' 
                                : 'uzkas darzoviu' 
                            : 'nu, palaukim...';
console.log(alkioAtsakymas2);

const skaicius2 = true ? true ? 4 : 3 : 2;
console.log(skaicius2);

const skaicius = true 
                ? true 
                    ? 4 
                    : 3 
                : 2;
console.log(skaicius);

const skaicius3 = false ? true ? 4 : 3 : 2;
console.log(skaicius3);

const skaicius4 = false 
                ? true 
                    ? 4 
                    : 3 
                : 2;
console.log(skaicius4);

const skaicius5 = true ? false ? 4 : 3 : 2;
console.log(skaicius5);

const skaicius6 = true 
                ? false 
                    ? 4 
                    : 3 
                : 2;
console.log(skaicius6);