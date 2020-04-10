let currentImage = {
  'genre' : 'bird',
  'path' : 'images/bird.jpg'
}

const imagesData = [
  {
    'genre' : 'bird',
    'path' : 'images/bird.jpg'
  },
  {
    'genre' : 'elephant',
    'path' : 'images/elephant.jpg'
  },
  {
    'genre' : 'sea',
    'path' : 'images/sea.jpg'
  },
  {
    'genre' : 'waterfall',
    'path' : 'images/waterfall.jpg'
  }
]


function clickImage(e) {

  const imgClass = e.target.getAttribute('class')
  const genre = imgClass.split(' ').pop();
  
  for (let i=0; i < imagesData.length; i++) {
    if (imagesData[i].genre === genre) {
      const mainImage = document.querySelector('.main-picture');
      mainImage.setAttribute('src', imagesData[i].path); 
      
      currentImage = {
        'genre' : genre,
        'path' : imagesData[i].path
      }
      return;
    }
  }
}


function leftClickButton() {
  // click
}


function rightClickButton() {
  // click
}


// add click function on each image
const images = document.querySelectorAll('.image')
images.forEach(image => {
  image.addEventListener('click', clickImage);
});

// add click function on left button
const leftButton = document.querySelector('.left-button');
leftButton.addEventListener('click', clickLeftButton);

// add click function on right button
const rightButton = document.querySelector('.right-button');
rightButton.addEventListener('click', clickRightButton);