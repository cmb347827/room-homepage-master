'use strict'; 

$(window).resize(function(){
	location.reload();
});


const data ={
	 navBtn: document.getElementById('menubutton'),
	 navBar: document.getElementById('navbarCollapse'),
}


function addListener(){
	
	[...document.querySelectorAll('.accordion-trigger')].forEach(function(btn) {
		btn.addEventListener('click', function() {
			/*const exp= btn.getAttribute('aria-expanded');
			if(exp==='true'){
				btn.setAttribute('aria-expanded','false');
			}else{
				btn.setAttribute('aria-expanded','true');
			}*/
		});
	});
	[...document.querySelectorAll('.tabbutton')].forEach(function(outerbtn) {

        outerbtn.addEventListener('click', function() {
			/*outerbtn.setAttribute('aria-current','page');
			outerbtn.toggleAttribute('aria-selected');
			const controls = outerbtn.getAttribute('aria-controls');
			const el = document.querySelector(`#${controls}`);
			//either tabcontent is showing already or not
			//if showing, ignore 
			if(!$(el).hasClass('is-hidden')){
               //ignore
			}else{
               //so toggle tabcontent
			   $(el).toggleClass('is-hidden');
			   [...document.querySelectorAll('.tabbutton')].forEach(function(btn) {
					//and hide the other tabs
					if(btn!==outerbtn){
					  const controls = btn.getAttribute('aria-controls');
					  const el = document.querySelector(`#${controls}`);
					  el.classList.add('is-hidden');
					  el.setAttribute('hidden','true');
				    }
			    });
			}*/
		});
	});
}
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  // Show the slide at the specified index
  carouselItems[index].style.display = 'flex';
}

function nextSlide() {
  
  currentIndex = ((currentIndex + 1) <= (carouselItems.length-1)) ? ++currentIndex : 0;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = ((currentIndex - 1) >= 0 ) ? --currentIndex : (carouselItems.length-1);
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

$(window).on('load',function(){
    
	data.navBtn.addEventListener('click', function(){
		$(data.navBar).toggleClass('is-active');
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('hidden');
	    data.navBtn.toggleAttribute('aria-expanded');
	});
});

