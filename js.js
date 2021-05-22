const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let zloty;
let sasin;

const swap = () => {
    if ( one.innerText === 'zł'){
         one.innerText = 'sasin';
         two.innerText = 'zł';
         result.innerText =' ';
        } else {
            one.innerText = 'zł';
            two.innerText = 'sasin';
        }
};

const zlToSasin = () => {
sasin = (converter.value) / 70000000;
result.innerText = `${converter.value} zł to ${sasin.toFixed(8)} sasin`;
converter.value = '';

};

const sasinToZl = () => {
    zloty = (converter.value) * 70000000;
    result.innerText = `${converter.value} sasin to ${zloty.toFixed(1)} zł`;
    converter.value = '';
};

const conversion = () => {
    if(converter.value !== ''){
        if ( one.innerText === 'sasin') {
            sasinToZl();            //zlToSasin(); 
        } else {
            zlToSasin();  //sasinToZl();
        }
    } else {
        result.innerText = 'Musisz wpisać jakąś liczbę!'
    }
};

const reset = () => {
    converter.value = '';
    result.innerText = '';
};

convBtn.addEventListener('click', conversion);
changeBtn.addEventListener('click', swap);
resetBtn.addEventListener('click', reset);
