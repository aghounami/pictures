const images = document.querySelectorAll('.picture');
const displayedImage = document.querySelector('.displayed-image');
const button_left = document.querySelector('.prev');
const button_right = document.querySelector('.next');

prevImage = () => {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('selected')) {
            images[i].classList.remove('selected');
            if (i === 0) {
                i = images.length;
            }
            images[i - 1].classList.add('selected');
            displayedImage.src = images[i - 1].src;
            
            break;
        }
    }
}

button_left.addEventListener('click', prevImage);



nextImage = () => {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('selected')) {
            images[i].classList.remove('selected');
            if (i === images.length - 1) {
                i = -1;
            }
            images[i + 1].classList.add('selected');
            displayedImage.src = images[i + 1].src;
            
            break;
        }
    }
}

button_right.addEventListener('click', nextImage);



