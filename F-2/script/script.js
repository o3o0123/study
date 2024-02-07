$(function () {

    //메뉴
    $('#gnb > ul > li').mouseover(function () {
        $(this).find('.sub').stop().slideDown();

    });
    $('#gnb > ul > li').mouseout(function () {
        $(this).find('.sub').stop().slideUp();

    });


    //팝업
    $('.pp').click(function () {
        $('.popup').show()
        return false
    });
    $('button').click(function () {
        $('.popup').hide()
        return false
    });

    //페이드 인 아웃
    var i = 0;

    function slider() {
        if (i < 2) {
            i++;
        } else {  // 그렇지 않을 경우 //
            i = 0;
        }
        $('.slider ul li').fadeOut();
        $('.slider ul li').eq(i).fadeIn();

    }
    setInterval(slider, 3000);

});