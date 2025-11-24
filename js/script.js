// Фотографии хакатона "Уральский код"
const photos = [
    "hackaton/1.jpg",
    "hackaton/2.jpg",
    "hackaton/3.jpg",
    "hackaton/4.jpg",
    "hackaton/5.jpg",
    "hackaton/6.jpg",
    "hackaton/7.jpg"
];

let currentSlide = 0;
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const slideCount = document.getElementById('slide-count');

function openGallery(index) {
    modal.style.display = 'flex';
    showSlide(index);
}

function closeModal() {
    modal.style.display = 'none';
}

function changeSlide(step) {
    let newIndex = currentSlide + step;
    if (newIndex >= photos.length) newIndex = 0;
    if (newIndex < 0) newIndex = photos.length - 1;
    showSlide(newIndex);
}

function showSlide(index) {
    currentSlide = index;
    modalImg.src = photos[index];
    slideCount.innerText = `${index + 1} / ${photos.length}`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight") changeSlide(1);
    if (event.key === "ArrowLeft") changeSlide(-1);
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
});

