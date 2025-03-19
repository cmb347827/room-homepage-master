'use strict'; 

$(window).resize(function(){
	offsetCalculate(data.currentIndex);
	//lefttopElement(data.carouselPicRight,data.light_image);
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
	 light_image:document.getElementById('light-image'),
	 carouselPicRight:0,
}


function addListener(){
	// Set up event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);
}

function offsetCalculate(index){
	 //is to position the left/right arrow buttons
	 //for each carousel item...
    [...document.querySelectorAll('.button-fix')].forEach((pic,picindex)=> {
		//if current carousel image from foreach is image that should is shown in showSlide()
		if(index===picindex){
			
			//either by desktop of mobile size, position the left/right arrow buttons., 
			// without (index===picindex) left/right arrow buttons is only positioned for last image in carousel images.
			if(window.innerWidth >= 768){
				$('.controls').css({
					'top':pic.offsetHeight -85,
					'left': pic.offsetWidth,
				});
				data.carouselPicRight= pic.offsetWidth;
			}else if(window.innerWidth <= 767){
				$('.controls').css({
					'top':pic.querySelector(':nth-child(2)').offsetHeight -85,
					'left': pic.querySelector(':nth-child(2)').offsetWidth - (70* 2),
				});
				data.carouselPicRight= pic.querySelector(':nth-child(2)').offsetWidth - (70* 2);
			}
		
		}
	});
	
	lefttopElement(data.carouselPicRight,data.light_image);
}

const lefttopElement=(elleft,elright)=>{
   //is to set/update the width of the left/right arrow buttons
   //on screen the light image is on the right - and the carousel image on the left , difference between distance is new width of .controls.
   let controlsWidth=  elright.getBoundingClientRect().left - elleft;
   

   if(controlsWidth>140){
		$("#prevBtn").css(
			'width', `${controlsWidth/2}px`,
		);
		$("#nextBtn").css(
			'width', `${controlsWidth/2}px`,
		);
   }
}

function showSlide(index) {
	// Hide all carousel items
	data.carouselItems.forEach((item,innerindex)=> {
			if(index===innerindex){
				//is the slide that should be shown, update it's included classes , without carousel-item class and with smooth-slide class.
				item.className = 'smooth-slide colRow';
			}else{
				item.className = 'carousel-item colRow'
			}
	});
	// Show the slide at the specified index
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
	
    offsetCalculate(data.currentIndex);
	addListener();
	data.navBtn.addEventListener('click', function(){
		
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

