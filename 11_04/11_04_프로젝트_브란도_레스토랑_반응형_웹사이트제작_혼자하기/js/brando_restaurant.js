;(function(window,document,$,undefined){ 

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
                that.footerFn();
        },//브란도 레스토랑 전체에서 최초에 실행할 js
        headerFn:       function(){
           //헤더의 메뉴 이동할 때 부드럽게 이동하게 하기
           //1.헤더의 a href에 달아준 공통 class명 smooth-btn 가져오기
           //ㄴ>attr("hrdf") 메소드 사용
           //2.클릭 이벤트 사용해서 탑 값 맞추기

           var url = null;
           $(".smooth-btn").on({
               click:function(){
                   url = $(this).attr("href")
                   $("html,body").stop().animate({ scrollTop : $( url ).offset().top },800)
                   $(".mobile-menu").hide();
                   $(".mobile-btn").removeClass("addClose");
               }
           })

            //scrolling
            $(window).scroll(function(){
                if( $(window).scrollTop()>=30 ){
                    $("#header").addClass("addMobile")
                }
                else{
                    $("#header").removeClass("addMobile")
                }
            });

            //resize
            var winW = 0;

            $(window).resize(function(){
                winW = $(window).width();
                if( winW>990 ){
                    $(".mobile-btn").removeClass("addClose");
                    $(".mobile-menu").hide();
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(e){
                    e.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").slideToggle();
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
                click : function(e){
                    e.preventDefault();
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
        footerFn:         function(){
            
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.
    brando.init();

})(window,document,jQuery);