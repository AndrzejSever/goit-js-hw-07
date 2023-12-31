import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryMarking = document.querySelector('.gallery');

const nowGallery = galleryItems => {
  return galleryItems.map(({ original, preview, description}) => {
    return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
  }).join('');
  
};

const nowMarkup = nowGallery(galleryItems);
galleryMarking.insertAdjacentHTML('beforeend', nowMarkup);

  const lightbox = new SimpleLightbox('.gallery a', {
        captionsData : "alt" , captionDelay : 250
  })



