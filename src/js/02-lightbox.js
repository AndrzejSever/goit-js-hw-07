import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryMarking = document.querySelector('.gallery');
console.log(galleryMarking);

const nowGallery = galleryItems => {
  return galleryItems.map(({ original }) => {
    return `
      <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${original}
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
    `;
  }).join('');
  
};

console.log(nowGallery)

const nowMarkup = nowGallery(galleryItems);
galleryMarking.insertAdjacentHTML('beforeend', nowMarkup);
