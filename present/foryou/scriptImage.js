function startCarousel(carousel, carouselObj) {
  setInterval(function () { //runs carousel
  carousel.find('.panel').each(function () {
      $(this).css('left', '-=0.5');
  });
  }, carouselObj.speed);
  
  setInterval(function () {
    if((carousel.find('.panel:first').position().left * -1) >= carousel.find('.panel:first').width()) {
	    carousel.append(carousel.find('.panel').eq(1).clone());
      carousel.find('.panel:last').css('left', 'calc(100% - 3px)');
      carousel.find('.panel:first').remove();
    }
  }, 1);
}

function createCarousel(carousel, container) {
  $(container).append('<div class="carousel"></div>');
  var currentCarousel = $(container).find('.carousel:last');
  for (var i = 0; i <= Object.keys(carousel.images).length; i++) {
    $(currentCarousel).append(carousel.panel);
    if (i == Object.keys(carousel.images).length)
      currentCarousel.find('.panel').eq(i).css({
      'background-image': 'url("' + carousel.images[0] + '")',
      'width': (100 / Object.keys(carousel.images).length) + '%',
      'left': 'calc(100% - 1px)',
    });
    else
      currentCarousel.find('.panel').eq(i).css({
      'background-image': 'url("' + carousel.images[i] + '")',
      'width': (100 / Object.keys(carousel.images).length) + '%',
      'left': (i * (100 / Object.keys(carousel.images).length)) + '%'
   });
  }
  startCarousel(currentCarousel, carousel);
}

function Carousel(speed, images) {
  return  {speed: speed, images: images, panel: '<div class="panel"></div>' }
}

$(document).ready( function () {
  var speed = 15, imageArray = ['./bg-01.jpeg', './bg-02.jpeg', './bg-03.jpeg', './bg-04.jpeg', './bg-05.jpeg'];
  createCarousel(Carousel(speed, imageArray), '#conTest');
});

$(document).ready( function () {
  var speed = 5, imageArray = ['./bg-07.jpeg', './bg-08.jpeg', './bg-09.jpeg', './bg-11.jpeg', './bg-12.jpeg'];
  createCarousel(Carousel(speed, imageArray), '#conTest2');
});

$(document).ready( function () {
  var speed = 9, imageArray = ['./bg-11.jpeg', './bg-12.jpeg', './bg-13.jpeg', './bg-14.jpeg', './bg-15.jpeg'];
  createCarousel(Carousel(speed, imageArray), '#conTest3');
});

$(document).ready( function () {
  var speed = 5, imageArray = ['./bg-16.jpeg', './bg-17.jpeg', './bg-18.jpeg', './bg-19.jpeg', './bg-21.jpeg'];
  createCarousel(Carousel(speed, imageArray), '#conTest4');
});

$(document).ready( function () {
  var speed = 7, imageArray = ['./bg-21.jpeg', './bg-22.jpeg', './bg-23.jpeg', './bg-24.jpeg', './bg-25.jpeg'];
  createCarousel(Carousel(speed, imageArray), '#conTest5');
});