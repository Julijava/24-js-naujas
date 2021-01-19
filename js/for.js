/*

for (let i=0; i<5; i++) {
    kartotinas kodas
}

*/

console.log('PRADZIA');
const precision = 100000;

// for (let i=2.5; i <= 8.5; i = Math.round(i * precision) / precision) {
   //  console.log('kartotinis kodas', i);
// }

for (let i = 2; i <=8; i += 1) {
    console.log('kartotinas kodas', i);
}

console.log('PABAIGA');

// i = 0; 0 < 5 true
//  console.log('kartotinis kodas');
     // i++ -> i = 1

// i = 1; 1 < 5 true
//  console.log('kartotinis kodas')
      // i++ -> i = 2

      // i = 2; 2 < 5 true
//  console.log('kartotinis kodas');
     // i++ -> i = 3

// i = 3; 3 < 5 true
//  console.log('kartotinis kodas')
      // i++ -> i = 4

      // i = 4; 4 < 5 true
//  console.log('kartotinis kodas');
     // i++ -> i = 5

// i = 5; 5 < 5 false

console.log('-------------------------------');

const words = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas', 'fabrikas', 'gandriukas', 'herbas'];

/*
1       1
2       10
3       11
4       101
6       110
7       111
8       1000

*/

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);


console.log(words);

for (let i = 0; i < words.length; i++) {
    const word = words[i];

    console.log(i, word);
    console.log('Pirma zodzio raide:', word[0]);
    console.log('Zodzio ilgis:', word.length);
}

console.log(words);
console.log(word);