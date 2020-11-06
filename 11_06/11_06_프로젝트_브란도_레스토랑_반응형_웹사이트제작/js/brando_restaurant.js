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
        },//브란도에서 최초 실행될 js

        headerFn:       function(){
            var url = null; 
            $(".smooth-btn").on({ 
                click : function(event){ 
                    event.preventDefault();
                    url = $(this).attr("href");
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) 
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
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);
                }
            });


        },//헤더의 js

        section01Fn:    function(){

            var winH = 969;
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
            //해당 섹션의 폰트사이즈 비율
            var txtBoxW = 0;
            var fontRateH3 = 0.082758621;
            var fontRateH4 = 0.037931034;
            var fontRateP = 0.048275862;
            var fontSizeH3 = 0;
            var fontSizeH4 = 0;
            var fontSizeP =  0;
            var boxHRate = 1.2222222;
            var boxW = 450;
            var boxH = 0; 
            var winH = 0;
            var boxT = 0; 
            var winW = 0;
            var boxR = 0; 
            var boxL = 0; 

            setTimeout(resizeFn,100);

            //해당 섹션의 폰트사이즈 비율
            function resizeFn(){
                
            txtBoxW = $(".content-wrap").width(); 
            boxW = $(".content").width(); 
            boxH = boxW * boxHRate;
            fontSizeH3 =  txtBoxW * fontRateH3;
            fontSizeH4 =  txtBoxW * fontRateH4;
            fontSizeP =  txtBoxW * fontRateP;
            winH = $(window).height();
            boxT = (winH-boxH)/2; 
            winW = $(window).width();
            boxR = (winW-boxW)/2; 
            boxL = boxR 
            //console.log ( "창넓이" ,winW );
            //console.log ( "박스 넓이 ",boxW );
            //console.log ( "박스 right값 ",boxR );
            //console.log ( "박스 left값 ",boxL ); 

            $(".content-wrap h3").css({fontSize:fontSizeH3});
                $(".content-wrap h4").css({fontSize:fontSizeH4});
                $(".content-wrap p").css({fontSize:fontSizeP});

                $(".content").css({height:boxH,top:boxT});

                //창 너비가 1170이하이면 실행
                if(winW <= 1170){
                    $(".content24").stop().animate({right:boxR,},300);
                    $(".content3").stop().animate({left:boxL},300);
                }
                else{
                    $(".content24").stop().animate({right:0,},300);
                    $(".content3").stop().animate({left:0,},300);
                }
            }
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateH3, "실제글자크기", fontSizeH3 );
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateH4, "실제글자크기", fontSizeH4 );
            // console.log( "텍스트박스 너비 ", txtBoxW, "글자크기비율", fontRateP, "실제글자크기", fontSizeP );

            $(window).resize(function(){
                resizeFn();
            });
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