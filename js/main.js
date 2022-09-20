$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods

    $(".header_inner .gnb>li").mouseenter(function(){
        $('.header_inner').addClass('on')
        $('.depth2').addClass('on')
        // $('header').css("border-bottom", "none");
    });
    $(".header_inner").mouseleave(function(){
        $('.header_inner').removeClass('on')
        $('.depth2').removeClass('on')
        // $('header').css("border-bottom", "1px solid rgba(255, 255, 255, 0.1)");
    });


        $('.visual').slick({
          autoplay:true,
          arrows: false,
          pauseOnHover: false,
          fade: true
        });
});