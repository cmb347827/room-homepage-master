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

$(window).on('load',function(){
   /* addListener();
	const navbar= document.getElementById('navbarCollapse');

	$("#menubutton").on("click", function(){
        
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('hidden');
		$('#nav').toggleClass('custom-nav');
		document.querySelector('#navbarCollapse').classList.toggle("hidden");
		navbar.toggleAttribute('aria-expanded');
    });
	
	$(data.subscribe).on('click',function(){
		dataFailed();
	});
    //User has pressed the keyboard ,and entered some data in the input field
    data.email.addEventListener('keyup',keyUp);
    data.email.addEventListener('keypress',keyPress);

    data.subscribe.addEventListener('click',(e)=>{
        e.preventDefault();
		keyPress(e);
	})
	*/
	data.navBtn.addEventListener('click', function(){
		$(data.navBar).toggleClass('is-active');
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('hidden');
		data.navBar.toggleAttribute('aria-expanded');
	});
});
