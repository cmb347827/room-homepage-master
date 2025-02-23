'use strict'; 

$(window).resize(function(){
	location.reload();
});


const data ={
	 navBtn: document.getElementById('menubutton'),
	 navBar: document.getElementById('navbarCollapse'),
	 currentIndex: 0,
	 carouselItems : document.querySelectorAll('.carousel-item'),
}


function addListener(){
	// Set up event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);
}
function offsetCalculate(){
    [...document.querySelectorAll('.button-fix')].forEach(function(pic) {
		$('.controls').css({
			'top':pic.offsetTop + pic.offsetHeight,
			'left': pic.offsetWidth,
		});
	});
}

function showSlide(index) {
  // Hide all carousel items
  data.carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  // Show the slide at the specified index
  data.carouselItems[index].style.display = 'flex';
  offsetCalculate();
}

function nextSlide() {
  data.currentIndex = ((data.currentIndex + 1) <= (data.carouselItems.length-1)) ? ++data.currentIndex : 0;
  showSlide(data.currentIndex);
}

function previousSlide() {
  data.currentIndex = ((data.currentIndex - 1) >= 0 ) ? --data.currentIndex : (data.carouselItems.length-1);
  showSlide(data.currentIndex);
}


$(window).on('load',function(){
    offsetCalculate();
	addListener();
	data.navBtn.addEventListener('click', function(){
		$(data.navBar).toggleClass('is-active');
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('hidden');
	    data.navBtn.toggleAttribute('aria-expanded');
	});
});

