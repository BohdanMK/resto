console.log(1);

const burgerBtn = document.querySelector('.burger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
let navBar = document.querySelector('.nav');
let headerHeight = header.offsetHeight;

console.log(navBar);



burgerBtn.addEventListener('click', event => {
    $this = event.currentTarget;
    let navBar = document.querySelector('.nav');

    body.classList.toggle('no-scroll');
    $this.classList.toggle('active');
    navBar.classList.toggle('active');
    header.classList.toggle('active');

});


//smoth scroll

const linkData = document.querySelectorAll('[data-scroll]');
/*  В загальному ми сторили масив силлок з data атрибутами в яких ми записали id блоків до яких ми будемо скролить */

linkData.forEach((item)=> {
    item.addEventListener('click', event =>{
        event.preventDefault();
        $this = event.currentTarget;

        let scrollTo = $this.getAttribute('data-scroll');
        let scrollToBlock = document.getElementById(scrollTo);
        let scrollPosition = scrollToBlock.offsetTop; // offsetTop - отримуємо відстань від до гори від нашої шапки

        console.log(scrollPosition);


        window.scroll({ // метод скролл дає можливість скролитись до певного обєкту
            top:scrollPosition - headerHeight, // - тут ми відняли висоту нашої шапки headerHeight = header.offsetHeight; - тут отримали висоту нашої шапки
            behavior: 'smooth',

        });

        body.classList.remove('no-scroll');
        burgerBtn.classList.remove('active');
        navBar.classList.remove('active');
        header.classList.toggle('active');
    })
});



//acardeon

const openBtn = document.querySelectorAll('.menu__box-head');
let allBox = document.querySelectorAll('.menu__box');


openBtn.forEach((item) => {
    item.addEventListener('click', event => {
        $this = event.currentTarget;
        let parentBox = $this.closest('.menu__box'); // прикол акардеона в тому що ми працюємо всі класи нашому parent блоку тому май на увазі.

        // тут ми просто через if задали умову при виконанні якої ми забирали класс модифікатор
        if(parentBox.classList.contains('menu__box--opend')) {
            parentBox.classList.remove('menu__box--opend')
        } else {
            allBox.forEach((item) => item.classList.remove('menu__box--opend'))
            // тут цікаво , ми просто пробігаємось по всіх боксах і знімаємо наш клас модифікатор
            parentBox.classList.add('menu__box--opend');
        }
    })
});


//swiper

let mySwiper = new Swiper('.swiper', {
    // Optional parameters
        autoplay: {
            delay:3000,
            disableOnInteraction:false
        },
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
});