const bar = document.querySelector('button');
const menu = document.querySelector('.menu');
const share = document.querySelector('.share');

bar.addEventListener('click', () => {
    menu.classList.toggle('active'); /* 더 공부하기  */
    share.classList.toggle('active');
});

