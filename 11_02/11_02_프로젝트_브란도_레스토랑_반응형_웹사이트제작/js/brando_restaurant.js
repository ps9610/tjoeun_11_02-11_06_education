;(function(window,document,$,undefined){ //즉시 실행 함수 코드
    //객체(함수와 속성(property)이 함께 포함) 함수 : 
    var brando = {//객체 리터럴 표기법 = 객체 선언과 동시에 값을 지정(헤더,섹션13개,푸터의 변수가 중복되어도 사용할 수 있게 하려고 씀)
 //👆 식별자이지만 밑에선 함수가 붙어있어서 메소드 역할을 함   
        init:           function(){ //리터럴함수 : 최초로 실행할 함수 // 리터럴:변수를 선언하면서 동시에 값을 지정해 주는 표기방식
            var that=this;
                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.footerFn();
        },//브란도 레스토랑 전체에서 최초에 실행할 js
        headerFn:       function(){
            
        },//헤더의 js (brando.headerFn.메소드~ 식으로 사용하면됨)
        section01Fn:    function(){
            //1. 섹션01의 높이는 창 높이(Window-height)로 설정
            //2. 반응형 설정 $(window).scroll();//스크롤되야만 실행
            //2. 반응형 설정 $(window).resize();//화면사이즈가 바껴야지만 실행
            var winH = 969;
                //$(window).height();//여기에 있어야 로드 시 창 높이값이 나옴 //없으면 undefined
                //$("#section01").css({ height:winH });//반응형일때 윈도우 창 높이를 읽어서 여기 css에다가 넣어라
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
                //      $("#section01").css({ height:winH });//크기가 바뀔때 마다 변화되는값을 넣어라
                resizeFn();
            //console.log( winH );//창크기 변경시에만 출력

            });
        },
        section02Fn:    function(){

        },
        section03Fn:    function(){

        },
        section04Fn:    function(){
            
        },
        section05Fn:    function(){
            
        },
        section06Fn:    function(){
            
        },
        section07Fn:    function(){
            
        },
        section08Fn:    function(){
            
        },
        section09Fn:    function(){
            
        },
        section10Fn:    function(){
            
        },
        section11Fn:    function(){
            
        },
        section12Fn:    function(){
            
        },
        section13Fn:    function(){
            
        },
        footerFn:         function(){
            
        }
    }; 
//위에서 함수를 만들고 밑에서 함수를 실행한다.
    brando.init();




})(window,document,jQuery);