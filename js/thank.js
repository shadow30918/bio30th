var isMobile=false;

$(document).ready(function(){
    
    getSize();
    updateRWDImg();

    $(window).on('resize', function() {
		getSize();
        updateRWDImg();
    });

})


function updateRWDImg() { 
    
	$('img').each(function($index) {
		var arrImg=$(this).attr('src').replace('-dt.','.').split('.');
		if ($(this).attr('md')==1) {
			$(this).attr('src',arrImg[0]+'-dt.'+arrImg[1]);
			if (isMobile) {	//部份圖片在手機上須更換圖 (只要在 img 中加入 md="1")
				$(this).attr('src',arrImg[0]+'.'+arrImg[1]);
			} else {
				$(this).attr('src',arrImg[0]+'-dt.'+arrImg[1]);
			}
		}
		if ($(this).attr('md')==0) {
			if (isMobile) {	//部份圖片在手機上須hidden (只要在 img 中加入 md="0")
				$(this).hide();
			} else {
				$(this).show();
			}
		}
	});
}

function getSize() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    documentHeight = $(document).height();
    isMobile = (windowWidth < 1080) ? true : false;
    
}

function GEvent(action) {   
    var tmpStr = action ;
    console.log(tmpStr);
    gtag('event', 'event_name', {
       'event_label': action,
       'event_action': action
    });
}