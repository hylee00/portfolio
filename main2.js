$(function(){
    $('#fullpage').fullpage({
		//options here
        anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        menu: '#rightnav',
		autoScrolling:true,
		scrollHorizontally: true,
        // navigation: false,
	    // navigationPosition: 'right',
	});
});

$(document).ready(function(){
	$('.port').slick({
		centerMode: true,
		centerPadding:'60px',
		// dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1900,
	});
  });

//   $(document).ready(function(){
// 	$('.port').slick({
// 		centerMode: true,
// 		centerPadding: '60px',
// 		slidesToShow: 3,
// 		responsive: [
// 		{
// 			breakpoint: 768,
// 			settings: {
// 			arrows: false,
// 			centerMode: true,
// 			centerPadding: '40px',
// 			slidesToShow: 3
// 			}
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 			arrows: false,
// 			centerMode: true,
// 			centerPadding: '40px',
// 			slidesToShow: 1
// 			}
// 		}
// 		]
// 	});
//   });

// $('.center').slick({
// 	centerMode: true,
// 	centerPadding: '60px',
// 	slidesToShow: 3,
// 	responsive: [
// 	  {
// 		breakpoint: 768,
// 		settings: {
// 		  arrows: false,
// 		  centerMode: true,
// 		  centerPadding: '40px',
// 		  slidesToShow: 3
// 		}
// 	  },
// 	  {
// 		breakpoint: 480,
// 		settings: {
// 		  arrows: false,
// 		  centerMode: true,
// 		  centerPadding: '40px',
// 		  slidesToShow: 1
// 		}
// 	  }
// 	]
//   });


// $('.autoplay').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
//   });
		  