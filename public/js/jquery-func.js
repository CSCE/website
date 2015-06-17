$(document).ready(function(){

    //=================================== Totop  ===================================//
		$().UItoTop({ 		
			scrollSpeed:500,
			easingType:'linear'
		});

	//=================================== Nav Responsive =====================================//
	    $('#menu').tinyNav({
	       active: 'selected'
	    });
	    
	  //=================================== Nav Superfish ======================================//
	  jQuery(document).ready(function() {
	    jQuery('ul.sf-menu').superfish();
	  });	

     //=================================== Accordion  =================================// 
    $('.accordion-container').hide(); 
    $('.accordion-trigger:first').addClass('active').next().show();
    $('.accordion-trigger').click(function(){
      if( $(this).next().is(':hidden') ) { 
        $('.accordion-trigger').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideDown();
      }
      return false;
    });

	 //=================================== Works Carousel  ===================================// 
	  $(".ch-grid").owlCarousel({
	      autoPlay: 3000, 
	      items : 3,
	      navigation: false,
	      navigationText: true, 
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [1000,2],
	      itemsMobile : [560,1],
	      stopOnHover : true
	  });

	  //=================================== Gallery Carousel  ===================================// 
	  $(".carousel_singlepost").owlCarousel({
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true,
	      autoPlay: 2000
	  });
  
	  //=================================== Testimonials Carousel  ===================================// 
	  $(".testimonials").owlCarousel({
	      autoPlay: 3500, 
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true
	  });

	  //=================================== Flikr Feed  ========================================//
     $('#flickr').jflickrfeed({
		 limit: 8, //Number of images to be displayed
		 qstrings: {
			id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
		 },
		 itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	 });

	 $('#flickr-aside').jflickrfeed({
		limit: 10, //Number of images to be displayed
		qstrings: {
			id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
		},
		itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	 });

	//=================================== Lightbox  ===================================//	
	$('.fancybox').fancybox({
		'overlayOpacity'	:  0.7,
		'overlayColor'		: '#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
    	'easingIn'			: 'easeOutBack',
    	'easingOut'      	: 'easeInBack',
		'speedIn'         	: '700',
		'centerOnScroll'	: true,
		'titlePosition'     : 'over'
	});
    
	//=================================== Hover Effects =====================================//
	$('.social_icon a').hover(function() {
		$(this).toggleClass('animated tada');
	});
	$('.specialize a i').hover(function() {
		$(this).toggleClass('animated wobble');
	});
	$('.contact_us .btn-default').hover(function() {
		$(this).toggleClass('animated pulse');
	});

	//=================================== Tooltips =====================================//

	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}  

	//=================================== Scrollbar  ======================================//

	$(".info_hover").mCustomScrollbar({
        scrollButtons:{
			enable:true
		},
		theme:"dark-2"
    });

    //=============================  Nice scroll bar Body =================================//
      $("html").niceScroll({
        background:"transparent",
        cursorcolor:"#555",
        cursorwidth:8, 
        boxzoom:true, 
        autohidemode:false,
        zindex:99999,
        cursorborder:"0",
      });

	//=================================== Subtmit Form  ====================================//
	  $('.form-contact').submit(function(event) {  
	    event.preventDefault();  
	    var url = $(this).attr('action');  
	    var datos = $(this).serialize();  
	    $.get(url, datos, function(resultado) {  
	      $('.result').html(resultado);  
	    });  
	  });  


	 //=================================== Slide Home =====================================//
     $('#slider').camera({        
        height: 'auto',
        time: 2000,
        transPeriod: 1300
     });  

  
});
	

