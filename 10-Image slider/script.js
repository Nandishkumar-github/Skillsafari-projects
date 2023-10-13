const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach(
    (slide, index) => {
slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--;
    slideImg()
}

const goNext = () => {
    counter++;
    slideImg()
}

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}