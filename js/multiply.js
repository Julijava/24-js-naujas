/*
SALYGOS:
- grazinamas sandaugos rezultatas
-dauginami tik skaiciai
*/

function multiply(a, b) {
    if (typeof a !== 'number') {
    return a * b;
}

const m1 = multiply(2, 2);
console.log(m1);

const m2 = multiply(6, 7);
console.log(m2);

const m3 = multiply(-6, 7.5);
console.log(m3);

const rez = a * b;

return a * b === 0 ? 0 : rez;