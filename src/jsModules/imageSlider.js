const imageSlider = () => {
  const slide = document.querySelector('#slide');
  const leftButton = document.querySelector('#left-arrow');
  const rightButton = document.querySelector('#right-arrow');
  const circles = document.querySelectorAll('.circle');

  const imageWidth = 770;
  let arrayCounter = 0;

  const updateCircles = arrayRef => {
    circles.forEach(node => node.style.removeProperty('background-color'));
    circles[arrayRef].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  };

  const slideRight = () => {
    if (arrayCounter === 5) {
      arrayCounter = 0;
    } else {
      arrayCounter += 1;
    }
    slide.style.transform = `translateX(-${arrayCounter * imageWidth}px)`;
    updateCircles(arrayCounter);
  };

  const slideLeft = () => {
    if (arrayCounter === 0) {
      arrayCounter = 5;
    } else {
      arrayCounter -= 1;
    }
    slide.style.transform = `translateX(-${arrayCounter * imageWidth}px)`;
    updateCircles(arrayCounter);
  };

  const slideCircle = arrayRef => {
    arrayCounter = Number(arrayRef);
    slide.style.transform = `translateX(-${arrayCounter * imageWidth}px)`;
    updateCircles(arrayCounter);
  };

  rightButton.addEventListener('click', slideRight);
  leftButton.addEventListener('click', slideLeft);
  circles.forEach(node =>
    node.addEventListener('click', function(event) {
      const arrayRef = event.target.getAttribute('data-array-ref');
      slideCircle(arrayRef);
    })
  );

  const timerSlide = setTimeout(slideRight, 5000);
};
export default imageSlider;
