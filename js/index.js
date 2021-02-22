// === tab Our Services

const TabWrapServices = document.querySelector('.services-card-name');
const tabItemServices = document.querySelectorAll('.card-name-menu');
const contentServices = document.querySelectorAll('.services-card-content-item');

const clickTab = function (tabWrap, tabItem, contentItem) {
    tabWrap.addEventListener('click', event => {
        const tabActive = document.querySelector(`[data-servises-content ='${event.target.dataset.servisesTitle}']`);
        contentItem.forEach(element => element.classList.remove('services-card-content-item-active'));
        tabItem.forEach(element => element.classList.remove('card-name-menu-active'));
        event.target.classList.add('card-name-menu-active');
        tabActive.classList.add('services-card-content-item-active');
    });
};

clickTab(TabWrapServices, tabItemServices, contentServices);


// ==== add and filter img Our Amazing Work Section

const imgsWorkOne = [
    'img/graphic design/graphic-design5.jpg',
    'img/graphic design/graphic-design6.jpg',
    'img/graphic design/graphic-design7.jpg',
    'img/graphic design/graphic-design8.jpg',
    'img/graphic design/graphic-design9.jpg',
    'img/graphic design/graphic-design10.jpg',
    'img/graphic design/graphic-design11.jpg',
    'img/graphic design/graphic-design12.jpg',
    'img/landing page/landing-page4.jpg',
    'img/wordpress/wordpress6.jpg',
    'img/landing page/landing-page5.jpg',
    'img/wordpress/wordpress5.jpg',
];
const imgsWorkTwo = [
    'img/wordpress/wordpress7.jpg',
    'img/wordpress/wordpress8.jpg',
    'img/wordpress/wordpress9.jpg',
    'img/wordpress/wordpress10.jpg',
    'img/landing page/landing-page6.jpg',
    'img/landing page/landing-page7.jpg',
    'img/web design/web-design5.jpg',
    'img/web design/web-design6.jpg',
    'img/web design/web-design7.jpg',
    'img/web design/web-design4.jpg',
    'img/landing page/landing-page6.jpg',
    'img/wordpress/wordpress5.jpg',
];
const loadMoreButton = document.querySelector('.load-more');
const tabWrapWork = document.querySelector('.work-gallery-menu');
const tabItemWork = document.querySelectorAll('.work-galery-menu-item');
const galleryWrapWork = document.querySelector('.work-gallery');
let galleryItemWork = document.querySelectorAll('.work-img-item');
const loader = document.querySelector('.loader-section');

const addItem = function (wrap, item, imgs) {
    const figure = imgs.map((imgSrc) => {
        let datName = imgSrc.split('/')[1].split(' ').join('-');
        let titleName = imgSrc.split('/')[1].split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        const hidI = item[0].cloneNode(true);

        hidI.querySelector('.suptitle-work-img').textContent = titleName;
        hidI.dataset.workContent = datName;
        if (imgSrc.split('/')[1] === 'graphic design' || imgSrc.split('/')[1] === 'web design') {
            hidI.querySelector('.title-work-img').textContent = 'creative design';
        } else if (imgSrc.split('/')[1] === 'landing page' || imgSrc.split('/')[1] === 'wordpress') {
            hidI.querySelector('.title-work-img').textContent = 'creative page';
        }
        const img = hidI.querySelector('.work-img');
        img.src = imgSrc;
        return hidI;
    });
    figure.forEach(element => {
        wrap.append(element);
    });

};

const loaderItem = function (button, wrapGallery, itemGallery, arryImgOne, arryImgTwo) {
    button.addEventListener('click', () => {
        loader.classList.add('loader-section-active');
        button.classList.add('load-more-hidden');
        const ramoveLoader = function () {
            loader.classList.remove('loader-section-active');
            button.classList.remove('load-more-hidden');
            if (itemGallery.length === 12) {
                addItem(wrapGallery, itemGallery, arryImgOne);
            } else if (itemGallery.length === 24) {
                addItem(wrapGallery, itemGallery, arryImgTwo);
                button.classList.add('load-more-hidden');
            }

            itemGallery = document.querySelectorAll('.work-img-item');
            const activeTab = document.querySelector('.work-galery-menu-item-acrive');

            filterItem(itemGallery, activeTab);
            changeItem(itemGallery);
        };
        setTimeout(ramoveLoader, 3000);
    });
};

loaderItem(loadMoreButton, galleryWrapWork, galleryItemWork, imgsWorkOne, imgsWorkTwo);

const changeItem = function (galleryItem) {
    tabWrapWork.addEventListener('click', event => {
        tabItemWork.forEach(element => element.classList.remove('work-galery-menu-item-acrive'));
        event.target.classList.add('work-galery-menu-item-acrive');
        filterItem(galleryItem, event.target);
    });
};

const filterItem = function (item, elementActive) {
    item.forEach(elem => {
        elem.classList.remove('work-img-item-hidden')
    });
    item.forEach(element => {
        if (elementActive.dataset.work === 'all') {
            return false;
        } else if (element.dataset.workContent !== elementActive.dataset.work) {
            element.classList.add('work-img-item-hidden');
        }
    });
};

changeItem(galleryItemWork);


//=====Swiper About Us Section

let mySwiperB = new Swiper('.slider-bottom', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    slideToClickedSlide: true,
    loopedSlides: 4,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    centeredSlides: true,
});

let mySwiperT = new Swiper('.slider-top', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'flip',
    flipEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
mySwiperB.controller.control = mySwiperT;
mySwiperT.controller.control = mySwiperB;
























