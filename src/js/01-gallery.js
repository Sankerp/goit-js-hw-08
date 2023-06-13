// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

const photoList = document.querySelector('.gallery');

const markupGalery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

photoList.insertAdjacentHTML('afterbegin', markupGalery);

let lightbox = new SimpleLightbox('.gallery a', {
  navText: ['←', '→'],
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(lightbox);
