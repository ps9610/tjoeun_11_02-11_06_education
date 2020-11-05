;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    var brando = {
        
        init:           function(){ 
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
                that.section14Fn();
                that.footerFn();
        },//브란도 레스토랑 전체에서 최초에 실행할 js
        headerFn:       function(){
            //속성을 변수로 둬서 이동시키면 됨
            //smooth scrolling = a href의 속성 중 하나인 (a href=#) hashtag 가져와서 해당 섹션으로 부드럽게 이동
            var url = null; //null이면 이동안되고 null이 아니면 해당 섹션으로 이동하게 하려고
            $(".smooth-btn").on({ //스무스 버튼을
                click : function(event){ //클릭하면 다음과 같이 실행하라 : 
                    event.preventDefault();
                    url = $(this).attr("href"); // url은 이 선택자의 속성을 가져오는 것이고,
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) //html,body에서 0.6초 동안에url의 탑 값으로 스크롤 탑이라는 애니메이션이 실행되게 하라.
                   $(".mobile-menu").hide();
                   $(".mobile-btn").removeClass("addClose");
                }
            });

            //scrolling
            $(window).scroll(function(){
                if( $(window).scrollTop()>=30 ){
                    $("#header").addClass("addMobile")
                    $(".goTop").addClass("addGotop")
                }
                else{
                    $("#header").removeClass("addMobile")
                    $(".goTop").removeClass("addGotop")
                }
            });

            //resize
            var winW = 0;

            $(window).resize(function(){
                winW = $(window).width();
                if( winW>990 ){
                    $(".mobile-btn").removeClass("addClose");
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);//한번은 내려가고 한번은 올라가고
                }
            });


        },//헤더의 js
        section01Fn:    function(){

            var winH = 969;
            //뭘 먼저 해야할지 우선순위 정리가 가장 첫번째
            //1. hungry 이미지 탑 값 구하기 = (window top - hungry높이)/2;            
                                //ㄴ> imgTop = (winH-imgH)/2;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);
            function resizeFn(){                
                winH = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:winH });
                
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                $(".hungry").css({ top:imgTop });
            };
            //Smooth Scrolling Event
            $(".arrow-down-btn").on({
                click : function(){
                    $("html,body").stop().animate({ scrollTop : $("#section02").offset().top},700);
                }
            });

            $(window).resize(function(){
                resizeFn();
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
        section14Fn:    function(){
            
        },
        footerFn:         function(){
            
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.
    brando.init();

})(window,document,jQuery);