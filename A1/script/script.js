$(function () { // s나는 이 기능을 시작하겠다 1 //

    //메뉴
    $('nav > ul > li').mouseover(function () { //2
        $('.sub').stop().slideDown();

    }); // 2 nav > ul > li에 마우스(오버)하면 .sub (nav > ul > li > ul) 를 슬라이드 다운

    $('nav > ul > li').mouseout(function () { //3
        $('.sub').stop().slideUp();
    }); //3 nav > ul > li 에 마우스(아웃)하면 .sub(nav > ul > li > ul)를 슬라이드 업 //


    // 모달 팝업
    $('.popup-open').click(function () { //4
        $('.popup').show();
        // return false;
    });  //4

    $('.popup-close').click(function () {
        $('.popup').hide();
    }); //5

    // 탭 메뉴
    let i;
    $('.tabmenu li').click(function () {
        $('tabmenu li').removeClass('on');
        $(this).addClass('on');
        // 탭 메뉴 클릭시 다른 클릭된 on클래스를 그 탭에서 제거 //

        i = $(this).index();
        $('.tabcon').hide();
        $('.tabcon').eq(i).show();
        return false; // 이전 단계로 돌아가지 않는다
    })




});  // 1 끝 //