var $ = jQuery.noConflict();
jQuery(document).ready(function($) {
	$(document).foundation();
	
	// Main menu 
	$( '#dl-menu' ).dlmenu({
		animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
	});
	$( '.dl-menu a' ).on('click', function(e) {
        // e.stopPropagation();
        $( '.dl-menu' ).removeAttr( "style" );
		setTimeout( function() {
			// $( '.dl-menu' ).height($( '.dl-menu' ).height());
			calMenu();
		}, 450);
        
    });
	

	// Banner slider homepage
	// $('.banner-slider').bxSlider({
	// 	// mode: 'fade',
	// 	nextSelector: '#slider-next',
 //  		prevSelector: '#slider-prev',
 //  		nextText: '',
 //  		prevText: ''
 //  		// onSlideBefore: function($slideElement, oldIndex, newIndex){
 //  		// 	$slideElement.addClass('active-slide');
 //  		// 	// $('.banner-slider > div').eq(newIndex).addClass('active-slide'));
 //  		// }
	// });

	$(".banner-slider").layerSlider({
		autoStart				:	false,
		twoWaySlideshow			:	true,
		navStartStop			:	false,
		responsive : true,
		tnContainerWidth : '100%',
		// slideDirection			:   'left',
		skin					:	'noskin',
		skinsPath				:	'css/',
		
		slideDirection          : 'right',
		slideDelay				:	4000,
		easingIn				:	'easeInOutQuint',
		easingOut				:	'easeInOutQuint'
	});

	// Toggle Search form 
	$('.toggle-search').on('click', function(e) {
        e.stopPropagation();
        $('.toggle-search').next().toggleClass('opened');
    });
    
	$('html').click(function(e) {
        if ( $(e.target).closest('.search-form').length === 0 ) {
            $('.toggle-search').next().removeClass('opened');
        }

    });

	
	// For Parallax effect	
	if ($(window).width() > 1024) {
		$('.has-parallax').each(function(i){
	        $('.has-parallax').parallax("50%", 0.1);
	    });

	}

	// $('.gamma-btn-close').on('click', function(e) {
 //        $('header, #middle').removeAttr('style');
 //    });
	
	
});

// $(window).on("scroll touchmove", function () {
 
// });	


$( window ).load(function() {
	$('.thumb-text .grid-img').each(function(i){
        $(this).find('.table-display').height($(this).find('.thumb').height());
    });

    calMenu();
  	setforreset();
});


 
/// Style for Menu position (menu header, menu footer, menu main)
function calMenu() {
	// console.log(totalHeight);
	var close_height = parseInt($('header').outerHeight()),
		menuH = parseInt(menuHeigh()) + 20,
		footerMenu = parseInt($('#dl-menu .menu-footer').outerHeight()),
		totalHeight = close_height + footerMenu + menuH + 35,
		footer_top = close_height + menuH,
		close_top = close_height + menuH;
	var $mask = $('.mask-layer'), 
		$close_btn = $('.dl-menuwrapper .close'),
		$menu_footer = $('.menu-footer'),
		$main_menu = $('.dl-menu, .wrap-menu');
	
	$mask.css({
		"height":  totalHeight + "px"
	});
	
	$close_btn.css({
		"height":  close_height + "px",
		"line-height":  close_height + "px",
	});
	
	$menu_footer.css({
		"top":  footer_top + "px"
	});

	$main_menu.css({
		"height":  menuH + "px"
	});
}


// Set first value of menu calMenu 
function setforreset() {
	var he = parseInt($('header').outerHeight()) + 
			parseInt(menuHeigh()) + 
			parseInt($('#dl-menu .menu-footer').outerHeight() + 35);

	$('.mask-layer').attr('data-mask-heigh', he);
	$('.dl-menuwrapper .close').attr('data-close-heigh', parseInt($('header').outerHeight()));
	$('.menu-footer').attr('data-footer-top-position', parseInt($('header').outerHeight()) + parseInt(menuHeigh()) );
	$('.dl-menu, .wrap-menu').attr('data-main-menu-height', parseInt(menuHeigh()));
}


// Return menu height
function menuHeigh() {
	var $ddmenu = $( '.dl-menu' );
	return $ddmenu.outerHeight();
}



var SERMON_PLAYER_WIDTH = 450;

function load_mp_player(id, title, speaker, soundfile, rowclass) {
	if (rowclass == 'even_row') bg_color = '#F3F2F2';
	else bg_color = '#F9F9F9';
	// alert("dasdasd");
	
	if ($('#' + id + '_row').is(":hidden")) {
		/* load flash player */
		if (soundfile != "") {							
			$('#' + id).flash( { 
				swf: 'base/js/player.swf',
				flashvars: {
					soundFile: soundfile,
					playerID: "'" + id + "'",
					quality: 'high',
					titles: title,  
					artists: speaker,  
					autostart: "no",
					animation: "no",
					encode: "no",
					bg: "fcfcfc", 				//Background
					leftbg: "f2f2f2", 			//Speaker icon/Volume control background
					lefticon: "1664A1",			//Speaker icon
					voltrack: "d3d3d3",			//Volume track
					volslider: "1664A1",		//Volume slider
					rightbg: "f2f2f2",			//Play/Pause button background
					rightbghover: "f2f2f2",		//Play/Pause button background (hover state)
					righticon: "1664A1",		//Play/Pause icon
					righticonhover: "46A5E5",	//Play/Pause icon (hover state)
					loader: "CBD03C",			//Loading bar
					track: "FFFFFF",			//Loading/Progress bar track backgrounds
					tracker: "eeeeee", 			//Progress track
					border: "CCCCCC",			//Progress bar border
					skip: "666666", 			//Previous/Next skip buttons
					text: "333333" 				//Text
				},
				width: SERMON_PLAYER_WIDTH,
				height: 34,
				wmode: 'transparent'
			}); 
			
			$('#' + id).show();
		}
		 
		$('#' + id + '_row').slideDown('medium', function() {});
		
	} else {
		$('#' + id + '_row').slideUp('medium', function() {});
		$('#' + id).html('');
	}
}
 