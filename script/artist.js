const Container = document.querySelector('.artist-container');
const loadMore = document.querySelector('#load-more');
const seeLess = document.querySelector('#see-less');

const artistContainer = [
  {
    id: 0,
    image: 'images/Optimized-img-one.jpg',
    name: 'Chris Boy',
    about: 'Best known for his hit rap song come and go',
    description: 'Chris is the most streamed artist in Africa best known on his rap songs',
  },
  {
    id: 1,
    image: 'images/Optimized-img-two.jpg',
    name: 'Lucky kid',
    about: 'Best known for his hit gospel song blessed',
    description: 'Lucky is talent gospel artist who has recorded nearly 20+ albums',
  },
  {
    id: 2,
    image: 'images/Optimized-img-three.jpg',
    name: 'The bond',
    about: 'The bond is very well known for supporting local talents',
    description: 'The bond has signed numerous local artist with his label bonded international',
  },
  {
    id: 3,
    image: 'images/Optimized-img-four.jpg',
    name: 'Salim junior',
    about: 'Best known for singing in vernacular languages',
    description: 'Salim is the most followed artist in all social media platforms in Africa',
  },
  {
    id: 4,
    image: 'images/Optimized-extra-five.jpg',
    name: 'Linda-x',
    about: 'Award winner of female awards 2022',
    description: 'She is the most streamed female artist in Africa and widely recognized',
  },
  {
    id: 5,
    image: 'images/Optimized-img-six.jpg',
    name: 'kifee',
    about: 'Male artist of year 2022',
    description: 'He is the most controversed loved artist in whole of Africa',
  },
];

const title = document.getElementById('heading');
title.innerHTML = `
    <h3 class="title-heading">Featuring artists</h3>
    <div class="orange-border"></div>
`;

artistContainer.forEach((box) => {
  const boxCard = document.createElement('div');
  boxCard.className = 'box-container';

  const html = `
    <div class="box">
        <div class="images">
            <img src="${box.image}" alt="${box.name}">
        </div>
        <div class="content">
            <h4 class="name">${box.name}</h4>
            <p class="about">${box.about}</p>
            <div class="grey-border"></div>
            <p class="desc">${box.description}</p>
        </div>
    </div>
`;

  Container.insertAdjacentHTML('beforeend', html);
});

let currentItem = 2;
loadMore.addEventListener('click', () => {
  const cards = document.querySelectorAll('.artist .artist-container .box');
  for (let i = currentItem; i <= currentItem + 4; i += 1) {
    cards[i].style.display = 'flex';
    loadMore.style.display = 'none';
    seeLess.style.display = 'flex';
  }
  currentItem += 4;
});

seeLess.addEventListener('click', () => {
  const cards = document.querySelectorAll('.artist .artist-container .box');
  for (let i = currentItem; i <= currentItem + 4; i += 1) {
    cards[i].style.display = 'none';
    loadMore.style.display = 'flex';
    seeLess.style.display = 'none';
  }
  currentItem += 4;
});
