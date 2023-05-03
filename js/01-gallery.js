import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);


//1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
// tablica.map((element, index, array) => {
//   // Ciało funkcji zwrotnej
// });
const galleryPics = document.querySelector('.gallery');  // if querySelector peError: galleryPics.insertAdjacentHTML is not a function 
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


    const showModalWindow = (event) => {
      event.preventDefault();
      if (event.target !== 'IMG') {
        return;
      }
      const instance = basicLightbox.create(`<img src="{event.target.dataset.source}" 
      width="800" height="600">`);
      instance.show();

      document.addEventListener('keyup', event => {
        if (event.code === 'Escape') {
          instance.close(); 
        }
      
      });

    }

     galleryPics.addEventListener("click", showModalWindow);