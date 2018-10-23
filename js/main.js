
(function($) {
	//creating variables for all pertinent html 
		//.active will be tied to which ever slide is showing
	var $activeSlide = $('.active'),
		//.homeslide is attached to all the slides
		$homeSlide = $('.homeSlide'),
		//navigation divs that act as buttons
		$slideNavPrev = $('.slideNavPrev'),
		$slideNavNext = $('.slideNavNext'),
		//the arrows inside the nav divs
		$slideNavPrevA = $('.slideNavPrev a'),
		$slideNavNextA = $('.slideNavNext a'),
		//container holding everything
		$hero = $('.hero')


		function init(){
			//Hide All slides but .active
			TweenLite.set($homeSlide.not($activeSlide),{autoAlpha:0})
			//disable arrow on load
			TweenLite.set($slideNavPrev, {autoAlpha:0.3})
		}

		init();

		//parameters defined on click event (line 54) dynamic vaiable setting
		function goToNextSlide(slideIn, slideOut){
			//whichever slide is '.active', slide down
			var tl = new TimelineLite(),
				slideOutH1 = slideOut.find('h1'),
				slideOutP = slideOut.find('p'),
				slideInH1 = slideIn.find('h1'),
				slideInP = slideIn.find('p'),
				index = slideIn.index(),
				size = $('.top .homeSlide').length - 1 ;
				console.log(size, index)
			//if there are more slides when function runs, go to next slide 
			if(slideIn.length !== 0){
				  //slides in the img, gives it alpha, and +=adds the class of active
				tl.set(slideIn, {y:'100%', autoAlpha:1,className:"+=active"})
				  //takes class of active
				  .set(slideOut, {className:"-=active"})
				  .to([slideOutH1.slideOutP], 0.3, {y:'-=15px',autoAlpha:0,ease:Power3.easeInOut},0 )
				  .to(slideOut,0.5,{y:'-100%',ease:Power3.easeInOut},0)
				  .to(slideIn,0.5,{y:'-=100%',ease:Power3.easeInOut},0)
				  .fromTo([slideInH1,slideInP],0.3, {y:'+=20px',autoAlpha:0},{autoAlpha:1,y:0,ease:Power1.easeInOut}, 0.3);
			 }

			 TweenLite.set($slideNavPrev, {autoAlpha:1})

			 if (index === size) {
			 	TweenLite.to($slideNavNext, 0.3,{autoAlpha:0.3})
			 }
		}
		$slideNavNext.click(function(e){

			e.preventDefault();

			var slideOut = $('.homeSlide.active'),
				slideIn = $('.homeSlide.active').next('.homeSlide');
			goToNextSlide(slideIn, slideOut);
		})




		function goToPrevSlide(slideIn, slideOut){
			//whichever slide is '.active', slide down
			var tl = new TimelineLite(),
				slideOutH1 = slideOut.find('h1'),
				slideOutP = slideOut.find('p'),
				slideInH1 = slideIn.find('h1'),
				slideInP = slideIn.find('p'),
				index = slideIn.index(),
				size = $('.top .homeSlide').length -1;
				console.log(size, index)

			if(slideIn.length !== 0){
				tl.set(slideIn, {y:'-100%', autoAlpha:1,className:"+=active"})
				  .set(slideOut, {className:"-=active"})
				  .to([slideOutH1.slideOutP], 0.3, {y:'+=15px',autoAlpha:0,ease:Power3.easeInOut},0 )
				  .to(slideOut,0.5,{y:'100%',ease:Power3.easeInOut},0)
				  .to(slideIn,0.5,{y:'+=100%',ease:Power3.easeInOut},0)
				  .fromTo([slideInH1,slideInP],0.3, {y:'-=20px',autoAlpha:0},{autoAlpha:1,y:0,ease:Power1.easeInOut}, 0.3);
				  }

			 TweenLite.set($slideNavNext, {autoAlpha:1})

			 if (index === 0) {
			 	TweenLite.to($slideNavPrev, 0.3,{autoAlpha:0.3})

			 }
		}
		$slideNavPrev.click(function(e){

			e.preventDefault();

			var slideOut = $('.homeSlide.active'),
				slideIn = $('.homeSlide.active').prev('.homeSlide');
			
			goToPrevSlide(slideIn, slideOut);
		})


		$(document).mousemove(function(e){
			

			if ($('.slide03').hasClass('active') == true ) {
				if(e.pageX > 80 ){
					$('.bottom strong').text(" $"+e.pageX+","+e.pageY);
				}else{
					$('.bottom strong').text(" Sorry, that is too low for this badassery!")
				}
			}else if( $('.slide02').hasClass('active') == true ){
		
				$('.bottom strong').text(e.pageX+","+e.pageY);
			}else if( $('.slide01').hasClass('active') == true ){
		
				$('.bottom strong').text("x: "+e.pageX+", y:"+e.pageY);
			}
			
			var yPos = ((e.clientY/$(window).height())-0.5)*4
			var	xPos = ((e.clientX/$(window).width())-0.5)*4

			TweenLite.to($hero,1,{rotationX: yPos ,rotationY:xPos,transformPerspective:900,transformOrigin:"center"})
		})




	})(jQuery);

