const menu = document.querySelector('.menu');
const share = document.querySelector('.share');
const header = document.querySelector('header');

export function btnClick(){
    menu.style.display = 'none';
    share.style.display = 'none';
    header.style.height = '45px';
}

export function btnUnClick(){
    menu.style.display = 'flex';
    share.style.display = 'block';
    header.style.height = '200px';
}