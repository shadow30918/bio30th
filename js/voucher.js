var isMobile = false;



$(document).ready(function () {

    getSize();
    updateRWDImg();
    SP_aos_init();

    if (!isMobile) {
        $('.menuWrap').css('display', 'block');
        $('.beauty').removeClass('active');
        $('.bgV').append('<video src="img/bgV.mp4" preload autoplay loop muted></video>');

    } else {
        $('.menuWrap').css('display', 'none');
        $('.beauty').addClass('active');

    }

    $(window).on('resize', function () {
        getSize();
        updateRWDImg();
        setTimeout(slider_init, 300);
        SP_aos_init();
        $('.bgV video').remove();
        if (!isMobile) {
            $('.menuWrap').css('display', 'block');
            $('.beauty').removeClass('active');
            $('.bgV').append('<video src="img/bgV.mp4" preload autoplay loop muted></video>');

        } else {
            $('.menuWrap').css('display', 'none');
            $('.menuWrap').removeClass('active');
            $('.beauty').addClass('active');

        }
    });


    //menu
    $('.menu_ham').click(function () {
        if (!$('.menuWrap').hasClass('active')) {
            $('.menuWrap').addClass('active');
            $('.menuWrap').slideDown(600);
        }
    });

    $('.close').click(function () {
        $('.menuWrap').removeClass('active');
        $('.menuWrap').slideUp(600);
    });

    $(document).on('mouseover', '.over', function () {
        var imgOver = $(this).children('img').attr('src').replace('-dt.', '_act-dt.');
        $(this).children('img').attr('src', imgOver);
    });
    $(document).on('mouseout', '.over', function () {
        var imgOut = $(this).children('img').attr('src').replace('_act-dt.', '-dt.');
        $(this).children('img').attr('src', imgOut);
    });

    $('.beauty').click(function () {
        window.open('index.html', '_self');
        //GEvent('menu_'+toNav);
    });

    $('.menu .bio30th').click(function () {
        window.open('30th.html', '_self');
    })


    //yt
    $('.play').click(function () {
        //GEvent('開啟影片');
        $('.yt_popup').append('<iframe src="https://www.youtube.com/embed/PMFH0xHvZrs?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').fadeIn(500);
    });

    $('.yt_popup').click(function () {
        $(this).fadeOut(500, function () {
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
    $('.blog .group').click(function () {
        index = $(this).index();
        //window.open(url[index],'_blank');
        //GEvent('bloger_'+(index+1));
    });


    //form-test
    $('.find_location').click(function(){
        $('.choose .tips').hide();
        $('.choose .map, .choose .choose_ok').show();
    });

    $('.choose_ok').click(function(){
        $('.choose').hide();
        $('.form').show();
        $('body,html').animate({
            scrollTop: $('.form').offset().top
        },500,'swing');
    });
    $('.form .back').click(function(){
        $('.form').hide();
        $('.choose').show();
        $('body,html').animate({
            scrollTop: $('.choose').offset().top
        },500,'swing');
    });

    $('.form .ok').click(function(){
        $('.form').hide();
        $('.done').show();
        $('body,html').animate({
            scrollTop: $('.done').offset().top
        },500,'swing');
    });

    $('.done .back').click(function(){
        $('.done').hide();
        $('.form').show();
        $('body,html').animate({
            scrollTop: $('.form').offset().top
        },500,'swing');
    });

})

$(window).load(function () {
    AOS.init({
        duration: 1500,
        easing: 'ease-out',
    });

    slider_init();
})




function updateRWDImg() {

    $('img').each(function ($index) {
        var arrImg = $(this).attr('src').replace('-dt.', '.').split('.');
        if ($(this).attr('md') == 1) {
            $(this).attr('src', arrImg[0] + '-dt.' + arrImg[1]);
            if (isMobile) { //部份圖片在手機上須更換圖 (只要在 img 中加入 md="1")
                $(this).attr('src', arrImg[0] + '.' + arrImg[1]);
            } else {
                $(this).attr('src', arrImg[0] + '-dt.' + arrImg[1]);
            }
        }
        if ($(this).attr('md') == 0) {
            if (isMobile) { //部份圖片在手機上須hidden (只要在 img 中加入 md="0")
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
    isMobile = (windowWidth < 1063) ? true : false;
}

function slider_init() {
    $('.bloger_slider').slick({
        nextArrow: '<i class="icon-right-open-big next"></i>',
        prevArrow: '<i class="icon-left-open-big prev"></i>',
        responsive: [{
                breakpoint: 3600,
                settings: 'unslick'
            },
            {
                breakpoint: 1081,
                settings: {
                    arrows: true,
                    dots: false,
                }
            },
        ]
    });
}

function GEvent(action) {
    var tmpStr = action;
    console.log(tmpStr);
    gtag('event', 'event_name', {
        'event_label': action,
        'event_action': action
    });
}

function SP_aos_init() {
    if (!isMobile) {
        $('.SP ul .title').attr({
            "data-aos": "fade-in",
            'data-aos-anchor': '.SP',
            'data-aos-anchor-placement': 'center-bottom'
        });
        $('.SP ul .date').attr({
            "data-aos": "fade-left",
            'data-aos-anchor': '.SP',
            'data-aos-anchor-placement': 'center-bottom'
        });
        $('.SP ul .txt').attr({
            "data-aos": "fade-up",
            'data-aos-anchor': '.SP',
            'data-aos-anchor-placement': 'center-bottom'
        });
        $('.SP ul .pic').attr({
            "data-aos": "fade-in",
            'data-aos-anchor': '.SP',
            'data-aos-anchor-placement': 'center-bottom'
        });

        for (i = 1; i < 5; i++) {
            $('.story li:nth-child(' + (i + 1) + ')').attr('data-aos-delay', i * 1000);
            $('.prize li:nth-child(' + (i) + ')').attr('data-aos-delay', (i + 4) * 1000);
        }

    } else {
        $('.SP ul .title').attr({
            "data-aos": "",
            'data-aos-anchor': '',
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-delay': '0'
        });
        $('.SP ul .date').attr({
            "data-aos": "",
            'data-aos-anchor': '',
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-delay': '0'
        });
        $('.SP ul .txt').attr({
            "data-aos": "",
            'data-aos-anchor': '',
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-delay': '0'
        });
        $('.SP ul .pic').attr({
            "data-aos": "",
            'data-aos-anchor': '',
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-delay': '0'
        });


    }
}