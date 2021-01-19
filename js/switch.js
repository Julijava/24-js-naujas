"use strict"

const day = 1;

switch (day) {
    case 1:
        console.log('Pirmadienis');
        break;

    case 2: 'antradienis'
            console.log('Antradienis');
            break;
    case 3:
        console.log('Treciadienis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera') 
        break;   
}

const day2 = 'ant';

switch (day2) {
    case 'pir':
        console.log('Pirmadienis');
        break;

    case 'ant':
        console.log('Antradienis');
        break;

    case 'tre':
        console.log('Treciadienis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera'); 
        break;   
}

console.log('-----------------------');

const day3 = 1;

switch (day3) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
        console.log('Darbo diena');
        console.log('eik dirbti');
        break;
    case 6: 
    case 7: 
        console.log('Savaitgalis');
        console.log('gali siek tiek pamiegoti');
        break;
    default:
        console.log('Tokios dienos savaiteje nera');
        break;
}

console.log('----------------');

const stotele = 'rudens2';

switch (stotele) {
    case 'ziedas1':
        console.log('ziedas1');
    case 'parko':
        console.log('parko');
    case 'geniu':
        console.log('geniu');
    case 'leliju':
        console.log('leliju');
    case 'rudens':
        console.log('rudens');
    case 'filaretu':
        console.log('filaretu');
    case 'karaliaus':
        console.log('karaliaus');
    case 'zaliasis':
        console.log('zaliasis');
        break;

    case 'lvovo':
            console.log('lvovo');
    case 'vasaros':
        console.log('vasaros');
    case 'rudens2':
        console.log('rudens2');
    case 'tremtiniu':
        console.log('tremtiniu');
    case 'ziedas2':
        console.log('ziedas2');
        break;
    default:
        console.log('tokia stotele nerasta');
}
console.log('-------------------');

const eiga = 'baldai';

switch (eiga) {
    case 'zeme':
        console.log('Paruosiame zeme');
    case 'pamatai':
        console.log('Paruosiame pamatus');
    case 'sienos':
        console.log('Statome sienas');
    case 'stogas':
        console.log('Statome stoga');
    case 'apsiltinimas':
        console.log('Apsiltinam nama');
    case 'irengimas':
        console.log('Dirbame viduje');
        break;

    default:
        console.log('tokio darbo nera');
}




