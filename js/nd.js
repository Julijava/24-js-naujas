"use strict"

console.log('JavaScript mini užduotys ---------------------------------------------------');
console.log('Kintamuju inicijavimas------------------------------------------------------');

console.log('pirma uzduotis--------------------------');
//sukurti 3 kintamuosius su skaiciaus tipo reiksmemis
// po kiekvieno ju inicijavimo, isvesti i console

const z1 = 3;
console.log(z1);

const m2 = 7;
console.log(m2);

const p3 = 11;
console.log(p3);

console.log('antra uzduotis-------------------------');
// sukurti 3 kintamuosius su teksto tipo reiksmemis
// po kiekvieno ju inicijavimo, isvesti i konsole

const pirmas = ('Man');
const antras = ('puikiai');
const trecias = ('sekasi!');

console.log(pirmas);
console.log(antras);
console.log(trecias);

console.log('trecia uzduotis------------------------');
// sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// po kiekvieno jų inicijavimo, išvesti į console

const sarasas = [3, 5, 7, 9, 11];
console.log(sarasas);

console.log('ketvirta uzduotis--------------------------');
// sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// po kiekvieno jų inicijavimo, išvesti į console

const noriuAplankyti = ['Kalifornija', 'Los Angeles', 'Brazilija', 'Seiselius', 'Maldyvus'];
console.log(noriuAplankyti);

console.log('Veiksmai su kintamaisiais--------------------------------------------------');

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

console.log('pirma uzduotis--------------------------');

const suma = (z1 + m2 + p3);
console.log(suma);

console.log('antra uzduotis--------------------------');

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

console.log(pirmas + ' ' + antras + ' ' + trecias);

const antrasBudas = `${pirmas} ${antras} ${trecias}`;
console.log(antrasBudas);

console.log('trecia uzduotis--------------------');

//apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console

const verte = [1, 2, 3, 4, 5];
const arraySuma = verte[0] + verte[1] + verte[2] + verte[3] + verte[4];
console.log(arraySuma);

const alternuojantiSuma = verte[0] - verte[1] + verte[2] - verte[3] + verte[4];
console.log(alternuojantiSuma);

console.log('ketvirta uzduotis------------------')

/* sujungti sąrašų vertes, kurių tipas yra tekstai, 
nuo sąrašo galo iki pradžios taip, 
jog tarp jų būtų kablelis ir tarpas
*/

 const s = ['savaitgalio!', 'grazaus', 'Linkiu'];
 const sakinys = s[2] + ', ' + s[1] + ', ' + s[0];
 console.log(sakinys);

console.log('Kintamuju palyginimas---------------------------------------');
console.log('pirma uzduotis ---------------------');

/*
Lyginant, jei rezultatas tenkina palyginimo sąlygą,
 tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, 
 išvesti sakinį “Bandykite kitą kartą.”.
*/

//palyginti skaiciaus tipo kintamuosius

/*
a.	kuris didesnis
b.	kuris mažesnis
c.	ar jie lygūs
d.	ar jie nelygūs
e.	kuris didesnis arba lygus
f.	kuris mažesnis arba lygus
*/

const a = 4;
const b = 2;

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

const c = 4;
const d = 2;

if (c < d) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta!');
}

const e = 4;
const f = 4;

if (e === f) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta!');
}

const g = 4;
const h = 4;

if (g !== h) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta!');
}

const ms = 4;
const vs = 4;

if (ms >= vs) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta!');
}

const kd = 4;
const rd = 4;

if (kd >= rd) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta!');
}

console.log('---------------------------------');

// isvesti teksto tipo kintamuju ilgius

const zodis = 'bumerangas';
const zodisIlgis = zodis.length;
console.log(`"${zodis}" ilgis yra ${zodisIlgis}.`);

console.log('---------------------------------');



/*
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
1.	kuris didesnis
2.	kuris mažesnis
3.	ar jie lygūs
4.	ar jie nelygūs
5.	kuris didesnis arba lygus
6.	kuris mažesnis arba lygus


*/

