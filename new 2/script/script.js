
$(function () {
    // 메뉴 //
    $('nav>ul>.acac').mouseover(function () {
        $('.sub, .bg').stop().slideDown();
        return false;
    })
    $('nav>ul>li').mouseleave(function () {
        $('.sub, .bg').stop().slideUp();
        return false;
    })

    // 슬라이드 //
    function slide() {
        $('.slide ul').animate({ left: "-100%" }, 2000, function () {
            $('.slide ul').append($('.slide ul li').first())
            $('.slide ul').css({ left: 0 })
        })
    }
    setInterval(slide, 6000)

    //탭 메뉴 //
    $('.tabmenu>ul>li').click(function () {
        $('.tabmenu>ul>li').removeClass('on');
        $(this).addClass('on');

        var o = $(this).index();
        console.log(o);
        $('.tabcon>ul').hide();
        $('.tabcon>ul').eq(o).show();

        return false;
    })

})

// 헤더 푸터 불러오기 //
// $(document).ready(function () {
//     $('#header').load('/header.html');
//     $('#footer').load('/footer.html');
// })





