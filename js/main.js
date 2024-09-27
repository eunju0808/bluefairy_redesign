$(function(){
    $("a").click(function() {
        if ($(this).attr("href") == "#") {
          return false;
        }
    });

    $('.visual .slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    $('.gnb>li>.depth2').hide()
    $('.gnb>li').on('mouseenter',function(){
        $(this).find('.depth2').stop().slideDown(400)
    })
    $('.gnb>li').on('mouseleave',function(){
        $(this).find('.depth2').stop().slideUp(400)
    })

    $('.special ul li a .cover').hide()
    $('.special ul li a').on('mouseenter',function(){
        $(this).find('.cover').stop().show()
    })
    $('.special ul li a').on('mouseleave',function(){
        $(this).find('.cover').stop().hide()
    })

    $(".new .btn_wrap button").click(function(){
        let num=$(this).index()
        console.log(num)
        $(".new .btn_wrap button").removeClass("on")
        $(this).addClass("on")
        $(".new .list_wrap").hide()
        $(".new .list_wrap").eq(num).show()
        
    })

    $('.family ul').hide()
    $('.family button').on('click',function(){
        $(this).toggleClass('on').siblings('.family ul').slideToggle(400);
    });

    let sw=true
    // 모바일 메뉴
    $('.m_btn a').on('click',function(){
        $('.m_menu_wrap').animate({'left':0})
        $('.black').fadeIn()
        $('body,html').css({'overflow':'hidden'})
    });

    $('.close_btn a').on('click',function(){
        $('.m_menu_wrap').animate({'left':'-100%'})
        $('.black').fadeOut()
        $('body,html').css({'overflow':'auto'})
    });

    $('.m_gnb>li>.depth2').hide()
    $('.m_gnb>li>a').on('click',function(){
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp()
    });

    // 창의 크기를 조절 했을때 이벤트 발생
    $(window).on('resize',function(){
        // 창의 현재 크기가 얼마인지 알기
        let num=$(this).width()
        console.log(num)
        // 창의 가로 사이즈가 767 보다 작거나 같으면
        // 모바일 이미지로 교체
        if(num<=767){
            $('.slick-arrow').hide()
            $('.slide1 img').attr('src','./images/m_slide1.png')
            $('.slide2 img').attr('src','./images/m_slide2.png')
        }else{
            $('.slick-arrow').show()
            $('.slide1 img').attr('src','./images/slide1.png')
            $('.slide2 img').attr('src','./images/slide2.png')
        }
    })
    // load 시 보이는 이미지
    let num=$(window).width()
    if(num<=767){
        $('.slick-arrow').hide()
        $('.slide1 img').attr('src','./images/m_slide1.png')
        $('.slide2 img').attr('src','./images/m_slide2.png')
    }else{
        $('.slick-arrow').show()
        $('.slide1 img').attr('src','./images/slide1.png')
        $('.slide2 img').attr('src','./images/slide2.png')
    }
})