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


function showSlide(index) {
  // Hide all carousel items
  data.carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  // Show the slide at the specified index
  data.carouselItems[index].style.display = 'flex';
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
    
	addListener();
	data.navBtn.addEventListener('click', function(){
		$(data.navBar).toggleClass('is-active');
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('hidden');
	    data.navBtn.toggleAttribute('aria-expanded');
	});
});

