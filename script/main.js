let menu = document.querySelector('.fa-bars');
let navMobile = document.querySelector('.nav-mobile');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
        menu.classList.toggle('fa-times');
        menu.classList.remove('active');
    })
})