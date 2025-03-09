'use strict'; 

$(window).resize(function(){
	offsetCalculate(data.currentIndex);
});


const data ={
	 navBtn: document.getElementById('menubutton'),
	 navBar: document.getElementById('navbarCollapse'),
	 nav: document.getElementById('nav'),
	 currentIndex: 0,
	 carouselItems : document.querySelectorAll('.carousel-item'),
	 header: document.getElementById('header'),
	 close: document.getElementById('close'),
	 open: document.getElementById('open'),
}


function addListener(){
	// Set up event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);
}

function offsetCalculate(index){
	 
    [...document.querySelectorAll('.button-fix')].forEach((pic,picindex)=> {
		
		if(index===picindex){
			if(window.innerWidth > 768){
				$('.controls').css({
					'top':pic.offsetHeight -85,
					'left': pic.offsetWidth,
				});
			}else if(window.innerWidth <= 767){
				$('.controls').css({
					'top':pic.querySelector(':nth-child(2)').offsetHeight -85,
					'left': pic.querySelector(':nth-child(2)').offsetWidth - (70* 2),
				});
			}
		}
	});
		
}

function showSlide(index) {
  // Hide all carousel items
  data.carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  // Show the slide at the specified index
  data.carouselItems[index].style.display = 'flex';
  data.carouselItems[index].classList.add('smooth');
  offsetCalculate(index);
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
    offsetCalculate(0);
	addListener();
	data.navBtn.addEventListener('click', function(){
		
		/*if(!(data.navBar.classList.contains('nav-class')) && !(data.navBar.classList.contains('collapse-menu'))){
			data.navBar.classList.add('nav-class','collapse-menu');
		}else{
			data.navBar.classList.remove('nav-class','collapse-menu');
		}*/
		if(!(data.navBar.classList.contains('collapse-menu'))){
			data.navBar.classList.add('collapse-menu');
		}else{
			data.navBar.classList.remove('collapse-menu');
		}
		if(!(data.nav.classList.contains('nav-class'))){
			data.nav.classList.add('nav-class');
		}else{
			data.nav.classList.remove('nav-class');
		}
		if(!(data.open.classList.contains('hidden'))){
			data.open.classList.add('hidden');
		}else{
			data.open.classList.remove('hidden');
		}
		if(!(data.close.classList.contains('hidden'))){
			data.close.classList.add('hidden');
		}else{
			data.close.classList.remove('hidden');
		}
	
		//$('#open').toggleClass('hidden');
		//$('#close').toggleClass('hidden');
		data.close.toggleAttribute('aria-hidden');
	    data.navBtn.toggleAttribute('aria-expanded');
       
		
	});
});

