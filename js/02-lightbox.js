import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPics = document.querySelector('.gallery');
const mainGallery = galleryItems
    .map (({preview, original, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                />
            </a>
        </div>`

      )
      .join(''); 

galleryPics.insertAdjacentHTML('afterbegin', mainGallery);

 

const newLightboxGallery = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    canimationSpeed: 250,
    captionPosition: 'bottom',
});
//galleryPics.addEventListener("click",lightbox); 
	 
 
