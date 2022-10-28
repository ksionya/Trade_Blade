function initCarousel () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        direction: 'horizontal',
        loop: false,
        spaceBetween: 18,
        autoHeight: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 18,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
            1320: {
                slidesPerView: 4,
                spaceBetween: 18,
            },
        }
    });

};
function initTab() {
let tabsBtn = document.querySelectorAll('.tab-menu li');
let tabsItems = document.querySelectorAll('.tab-item');

tabsBtn.forEach(function (item) {
   item.addEventListener('click', function() {
       let currentBtn = item;
       let tabId = currentBtn.getAttribute('data-tab');
       let currentTab = document.querySelector(tabId);

       tabsBtn.forEach(function (item) {
           item.classList.remove('active');
       });
       tabsItems.forEach(function (item) {
           item.classList.remove('active');
       });
       currentBtn.classList.add('active');
       currentTab.classList.add('active');
   });
});

};
function initAccordion() {

    let accordionItems = document.querySelectorAll('.accordion-item');
    let accordionTitle = document.querySelectorAll('.accordion-title');

    accordionTitle.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentAccordion = item;
            let drop = currentAccordion.nextElementSibling;

            accordionTitle.forEach(function (item) {
                item.parentElement.classList.remove('active');
            });
            if(drop.style.maxHeight) {
                document.querySelectorAll('.drop').forEach(function (el) {
                    el.style.maxHeight = null;
                })
            }
            else {
                document.querySelectorAll('.drop').forEach(function (el) {
                    el.style.maxHeight = null;
                    drop.style.maxHeight = drop.scrollHeight + 'px';
                    currentAccordion.parentElement.classList.toggle('active');
                })
            };


        })
    })
};
function scrollMenu() {
    let menuItem = document.querySelectorAll('.header-nav a');
    document.querySelectorAll('.header-nav a').forEach(function (item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.header').clientHeight;
            console.log(topOffset)
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });

    });

};
function mobileMenu() {
    let burger = document.querySelector('.burger');
    let header = document.querySelector('.header');
    burger.addEventListener('click', function (item) {
        burger.classList.toggle('active');
        header.classList.toggle('active');
        document.querySelector('body').classList.toggle('hidden');
    })
};
function btnMore() {
let btnMore = document.querySelector('.js-more');
let reviewsItems = document.querySelectorAll('.reviews-item:nth-child(n +3)');

    btnMore.addEventListener('click', function(event) {

             btnMore.style.opacity = '0';

        reviewsItems.forEach(function(item) {
            item.style.maxHeight = '100%';
        })
        event.preventDefault();

    });

};
function initAnimate() {
    new WOW().init();
};
function stickyHeader() {
    const header = document.querySelector(".header");
    const sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("js-sticky");
        } else {
            header.classList.remove("js-sticky");
        }
    };
};




document.addEventListener("DOMContentLoaded", function(event) {
    initCarousel ();
    initTab();
    initAccordion();
    scrollMenu();
    mobileMenu();
    btnMore();
    initAnimate();
    stickyHeader();
});