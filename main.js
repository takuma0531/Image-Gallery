let currentIndex = 0;
let currentImage = {
  'genre' : 'bird',
  'path' : 'images/bird.jpg'
};

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
      
      currentIndex = i;
      currentImage = {
        'genre' : genre,
        'path' : imagesData[i].path
      }
      console.log(currentIndex)
      return;
    }
  }
}


function clickLeftButton() {
  const mainImage = document.querySelector('.main-picture');

  if (currentIndex === 0) {
    // go to the last image
    mainImage.setAttribute('src', imagesData[3].path)
    currentIndex = imagesData.length - 1;
  } else {
    // go to the previous image
    currentIndex -= 1;
    mainImage.setAttribute('src',imagesData[currentIndex].path); 
  }
}


function clickRightButton() {
  const mainImage = document.querySelector('.main-picture');

  if (currentIndex === 3) {
    // go to the first image
    mainImage.setAttribute('src', imagesData[0].path)
    currentIndex = 0;
  } else {
    // go to the next image
    currentIndex += 1;
    mainImage.setAttribute('src',imagesData[currentIndex].path);
  }
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