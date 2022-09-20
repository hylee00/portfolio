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
