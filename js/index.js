var isMobile=false;

$(document).ready(function(){

    getSize();
    updateRWDImg();
    if(!isMobile){
        $('.menuWrap').css('display','block');
        $('.beauty').removeClass('active');
        $('.bgV').append('<video src="img/bgV.mp4" preload autoplay loop muted></video>');
    }else{
        $('.menuWrap').css('display','none');
        $('.beauty').addClass('active');
    }
    
    $(window).on('resize', function() {
		getSize();
        updateRWDImg();
        $('.bgV video').remove();
        if(!isMobile){
            $('.menuWrap').css('display','block');
            $('.beauty').removeClass('active');
            $('.bgV').append('<video src="img/bgV.mp4" preload autoplay loop muted></video>');
        }else{
            $('.menuWrap').css('display','none');
            $('.menuWrap').removeClass('active');
            $('.beauty').addClass('active');
        }
    });

    $('.sale_slider').slick({
        arrows: true,
        dots: false,
        nextArrow: '<i class="icon-right-open-big next"></i>',
        prevArrow: '<i class="icon-left-open-big prev"></i>',
    });

    $('.menu_ham').click(function(){
        if(!$('.menuWrap').hasClass('active')){
            $('.menuWrap').addClass('active');
            $('.menuWrap').slideDown(600);
        }
    });

    $('.close').click(function(){        
        $('.menuWrap').removeClass('active');
        $('.menuWrap').slideUp(600);
    });

    $(document).on('mouseover','.over',function(){
       var imgOver = $(this).children('img').attr('src').replace('-dt.','_act-dt.');
       $(this).children('img').attr('src',imgOver);
    });
    $(document).on('mouseout','.over',function(){
        var imgOut = $(this).children('img').attr('src').replace('_act-dt.','-dt.');
        $(this).children('img').attr('src',imgOut);
     });

     $('.beauty .submenu li').click(function(){
        toNav = $(this).attr('data');
        GEvent('menu_'+toNav);
        
        if(isMobile){
            $('.menuWrap').removeClass('active');
            $('.menuWrap').slideUp(300);
            $('html,body').stop().animate({
                scrollTop: $('.'+toNav).offset().top
            }, 1000, 'swing');
        }else{
            $('html,body').stop().animate({
                scrollTop: $('.'+toNav).offset().top -100
            }, 1000, 'swing');
        }
     });

     $('.menu .voucher').click(function(){
         window.open('voucher.html','_self');
     })

    $('.play').click(function(){
        GEvent('開啟影片');
        $('.yt_popup').append('<iframe src="https://www.youtube.com/embed/PMFH0xHvZrs?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').fadeIn(500);
    });

    $('.yt_popup').click(function(){
        $(this).fadeOut(500,function(){
            $(this).children('iframe').remove();
        });
    });

    //blog
    var url = [
        'https://www.vogue.com.tw/beauty/special/content-40278.html',
        'https://www.imkatewang.com/20180503-2/',
        'https://www.marieclaire.com.tw/beauty/skin-care/36554/page_2'
    ]
    //$('.blog .group:nth-child(n+2)').hide();//隱藏2、3
    $('.blog .group').click(function(){
        index = $(this).index();
        window.open(url[index],'_blank');
        GEvent('bloger_'+(index+1));
    });

})

$(window).load(function(){
    AOS.init({
        duration: 1500,
        easing: 'ease-out',
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