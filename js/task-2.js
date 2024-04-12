const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];



const nowImag = document.querySelector(".gallery");
const nowGallery = images => {
  return images.map(({ url, alt }) => {
    return `
      <li class="item">
        <img src="${url}" alt="${alt}" class="image">
      </li>
    `;
  }).join('');
  
};


const nowMarkup = nowGallery(images);
nowImag.insertAdjacentHTML('beforeend', nowMarkup);

nowImag.style.display = 'flex'; 
nowImag.style.gap = '24px'
 
console.log(nowImag.children)

const x = [...nowImag.children]
console.log(x)

x.forEach(element => {
  element.querySelector(".image").style.width = '250px';
  element.querySelector(".image").style.height = '250px'
});