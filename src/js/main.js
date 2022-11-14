let carousel, carouselNextBtn, carouselPrevBtn, allCarouselItems, allMenuDots, zoomSection, zoomCloseSectionBtn
let currentindex = 0

const pictures = [
    {
        src: './dist/img/bridge_big.jpg'
    },
    {
        src: './dist/img/bulldog_big.jpg'
    },
    {
        src: './dist/img/sea_big.jpg'
    }
]

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    carousel = document.querySelector('.carousel')
    carouselNextBtn = carousel.querySelector('.carousel__arrow--next')
    carouselPrevBtn = carousel.querySelector('.carousel__arrow--prev')
    allCarouselItems = carousel.querySelectorAll('.carousel__content--item')
    allMenuDots = document.querySelectorAll('.menu__list--item-btn')
    zoomSection = document.querySelector('.zoom')
    zoomCloseSectionBtn = zoomSection.querySelector('.zoom__btn')
}

const prepareDOMEvents = () => {
    carouselNextBtn.addEventListener('click', handleNextImage)
    carouselPrevBtn.addEventListener('click', handlePrevImage)
    allMenuDots.forEach(el => el.addEventListener('click', handleMenu))
    allCarouselItems.forEach(el => el.addEventListener('click', handleZoom))
    zoomCloseSectionBtn.addEventListener('click', closeZoom)
}

const handleNextImage = () => {

    if (currentindex == allCarouselItems.length - 1) {
        currentindex = 0
    } else {
        currentindex++
    }
    handleImage()
}

const handlePrevImage = () => {

    if (currentindex <= 0) {
        currentindex = allCarouselItems.length - 1
    } else {
        currentindex--
    }
    handleImage()
}

const handleImage = () => {
    allCarouselItems.forEach(el => {
        el.classList.remove('activeItem')
    });
    allCarouselItems[currentindex].classList.add('activeItem')
    loadMenu()
}

const loadMenu = () => {
    allMenuDots.forEach(dot => dot.classList.remove('activeBtn'))
    allMenuDots[currentindex].classList.add('activeBtn')
}

const handleMenu = (e) => {
    currentindex = e.target.getAttribute('data-index')
    
    loadMenu()
    handleImage()
}

const handleZoom = (e) => {
    const zoomPicture = zoomSection.querySelector('.zoom__picture')
    const currentSrc = e.target.getAttribute('data-index')
    zoomSection.classList.add('zoomActive')
    zoomPicture.setAttribute('src', pictures[currentSrc].src)
}

const closeZoom = () => {
    zoomSection.classList.remove('zoomActive')
}

document.addEventListener('DOMContentLoaded', main)