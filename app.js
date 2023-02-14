const bold = document.querySelector('#bold');
const italic = document.querySelector('#italic');
const underline = document.querySelector('#underline');
const left = document.querySelector('#left');
const center = document.querySelector('#center');
const right = document.querySelector('#right');
const justify = document.querySelector('#justify');
const font_size = document.querySelector('#font-size');
const font_case = document.querySelector('#font-case');
const font_color = document.querySelector('#font-color');
const textField = document.querySelector('#myText');

bold.addEventListener('click', ()=>{
    textField.classList.toggle('font-bold');
    bold.classList.toggle('bg-transparent2');
});

italic.addEventListener('click', ()=>{
    textField.classList.toggle('italic');
    italic.classList.toggle('bg-transparent2');
});

underline.addEventListener('click', ()=>{
    textField.classList.toggle('underline');
    underline.classList.toggle('bg-transparent2');
});

left.addEventListener('click', ()=>{
    textField.classList.remove('text-center');
    textField.classList.remove('text-right');
    textField.classList.remove('text-justify');
    textField.classList.toggle('text-left');
    center.classList.remove('bg-transparent2');
    right.classList.remove('bg-transparent2');
    justify.classList.remove('bg-transparent2');
    left.classList.toggle('bg-transparent2');
});

center.addEventListener('click', ()=>{
    textField.classList.remove('text-left');
    textField.classList.remove('text-right');
    textField.classList.remove('text-justify');
    textField.classList.toggle('text-center');
    left.classList.remove('bg-transparent2');
    right.classList.remove('bg-transparent2');
    justify.classList.remove('bg-transparent2');
    center.classList.toggle('bg-transparent2');
});

right.addEventListener('click', ()=>{
    textField.classList.remove('text-left');
    textField.classList.remove('text-center');
    textField.classList.remove('text-justify');
    textField.classList.toggle('text-right');
    center.classList.remove('bg-transparent2');
    left.classList.remove('bg-transparent2');
    justify.classList.remove('bg-transparent2');
    right.classList.toggle('bg-transparent2');
});

justify.addEventListener('click', ()=>{
    textField.classList.remove('text-left');
    textField.classList.remove('text-center');
    textField.classList.remove('text-right');
    textField.classList.toggle('text-justify');
    right.classList.remove('bg-transparent2');
    left.classList.remove('bg-transparent2');
    center.classList.remove('bg-transparent2');
    justify.classList.toggle('bg-transparent2');
});

font_size.addEventListener('change', ()=> {
    textField.style.fontSize = `${font_size.value}px`;
});

let fontCase = 0;

font_case.addEventListener('click', ()=>{
    if (fontCase === 0) {
        textField.classList.add('uppercase');
        fontCase = 1;
    } else if (fontCase === 1) {
        textField.classList.remove('uppercase');
        textField.classList.add('lowercase');
        fontCase = 2;
    } else {
        textField.classList.remove('lowercase');
        fontCase = 0;
    }
});

font_color.addEventListener('input', ()=> {
    textField.style.color = font_color.value;
});












