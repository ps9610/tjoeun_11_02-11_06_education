;(function(window,document,$,undefined){
    //객체 : 함수와 속성(property)이 함께 포함되어 있음
    //리터럴 표기법으로 객체 만들기
        //ㄴ>객체 선언과 동시에 값을 지정 (헤더,섹션13개,푸터의 변수가 중복되어도 사용할 수 있게 하려고 씀)
    var brando = {
    //property:value (속성:값)
        //ㄴ> 객체 안의 자료를 표기하는 방식 
        //= 객체 리터럴 방식으로 객체 정의
    //property:function() (속성:함수) 
        //ㄴ> 객체 리터럴 방식으로 익명 함수 선언 (function 뒤 이름없이 바로 괄호옴) 
        //이땐 속성이 아니고 "메소드"가 됨
        //표기방법 : brando.init (brando 객체의 init 값을 가져온다.)

        a:0, //(정수형변수)
        b:'is', //(문자형변수)
        c:true, //(논리변수)
        init:           function(){//최초로 실행할 함수(리터럴함수)
            brando.headerFn();
        },//(브란도 레스토랑 전체에서 최초에 실행할 js)
        headerFn:       function(){
            //console.log(brando.a, brando.b, brando.c); 
            //( = 함수를 포함하는 전체 객체 this = brando👇)
                    //console.log(this.a, this.b, this.c);
            var that = this;//이거좋은방법!!
            console.log(that.a, that.b, that.c);
        },
        
        section01Fn:    function(){
            var cnt=0;
            console.log("section01Fn", cnt );//여기서 변수 cnt를 사용했다 하더라도
        },
        section02Fn:    function(){
            var cnt=-1;
            console.log("section02Fn", cnt );//여기서 변수 cnt는 전혀 다름 = 변수의 중복성 방지
        }
     
    brando.init();
        
})(window,document,jQuery); //즉시 실행 함수 코드
     
;(function(window,document,$,undefined){

    section01Fn:    function(){
            //1. 섹션01의 높이 = 창 높이(Window-height)
                //ㄴ>창을 늘렸다 줄였다 해도 섹션01 높이가 같이 늘어났다가 줄어들게 하려고
                // = 반응형
            //2. 반응형 설정 $(window).scroll();//스크롤되야만 실행
            //2. 반응형 설정 $(window).resize();//화면사이즈가 바뀌어야만 실행

            var winH = 969;
            //$(window).height();//여기에 있어야 로드 시 창 높이값이 나옴, 없으면 undefined
            //$("#section01").css({ height:winH });//윈도우 창 높이를 읽어서 css 높이에 그 값을 넣어라
            //resizeFn();랑 👆 같은거
            //console.log( winH );//로드시 처음 한번실행
            
            setTimeout(resizeFn,100);
            function resizeFn(){                
                winH = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:winH });
                //console.log( winH )
            };
            
            $(window).resize(function(){
                //winH = $(window).height();
                //      $("#section01").css({ height:winH });//크기가 바뀔때 마다 변화되는 값을 css 높이에 넣어라
                resizeFn();
                //console.log( winH );//창 크기 변경시에만 출력
                
            })
            
    brando.init();

})(window,document,jQuery);

// section01 hungry가 창 줄이고 늘릴 때마다 같이 움직이게
section01Fn:    function(){
           
    var winH = 969;//
    var hunH = $(".hungry").height();
    var hunT = (winH-hunH)/2 //hungry top값을 자동화 시키면 창 크기에 따라서 hungry가 따라다니게 할 수 있음
                            //ㄴ>이미지 맨 위 = (창높이 - 이미지높이) / 2

    setTimeout(resizeFn,100);
    function resizeFn(){                
        winH = $(window).height();
        $("#section01, #section02, #section03, #section04").css({ height:winH });
        hunH = $(".hungry").height();//초기값
        hunT = (winH-hunH)/2; //바뀐값 둘 다 필요함
        $(".hungry").stop().animate({ top:hunT },300);
    };

    $(window).resize(function(){
        resizeFn();
    });

//스무스 스크롤링 이벤트
    $(".arrow-down-btn").on({
        click : function(){
            $("html,body").stop().animate({ scrollTop : 
                $("#section02").offset().top},700);
                //section01의 높이랑 section02의 탑값이 똑같아서 height이 다 내려간거지 만약 높이가 50이면 높이만큼만 가고 멈춰버림
        }
    })