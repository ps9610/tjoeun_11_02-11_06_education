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
                                            //현재 스크롤의 위치값
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
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            //뭘 먼저 해야할지 우선순위 정리가 가장 첫번째
            //1. 창을 늘리고 줄일 때마다 섹션 1,2,3,4의 전체 높이가 같이 늘어났다 줄어들어야 하고 (전체 배경이 사진이니까)
                //ㄴ>   1) 변하는 값 : (늘어났다 줄어들었다 하는) 창의 높이 
                //          var winH = 0;
                //      2)  창을 늘렸다 줄여야 하니까 resize함수 필요
                //          function resizeFn(){}
                //      3) winH가 브라우저 창의 높이라는 변수라고 설정해줌
                //          winH = $(window).height();
                //      4) 섹션 1234, 움직인다, 높이, 윈도우 창과 같은 값으로 라고 설정
                //          $("#section01, #section02, #section03, #section04").stop().animate({ height:winH });
            //2. 헝그리 이미지 크기(높이)는 유지, resize시 브라우저 꼭대기랑 이미지 사이 위 공백의 길이가 같이 늘어났다 줄어들게 함
                //ㄴ>   1) 변하는 값 : 이미지 사이 위의 공백
                //                      = (전체 창 높이 - 이미지 높이) / 2;
                //          var imgTop = (winH - 이미지 높이) / 2;
                //                                  ㄴ> var imgH = $(".hungry").height();
                //      2) 헝그리 이미지, Top값이, 
                //      3) 

                //1) hungry 이미지 탑 값 구하기 = (window top - hungry높이)/2;              
                                //ㄴ> imgTop = (winH-imgH)/2;
            setTimeout(resizeFn,100);
            function resizeFn(){                
                winH = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:winH });
                
                // ✨ {top:imgTop},{bottom:imgTop}을 줘도 헝그리는 중앙에 있는데 top만 쓴 이유 :  
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                //$(".hungry").css({top:imgTop},{bottom:imgTop});
                $(".hungry").css({ top:imgTop });
                //console.log(imgH) -> 이미지의 높이를 알고 싶을 때
                // = console.log($(".hungry").height())
            }

            //Smooth Scrolling Event
            // ✨ scroll vs scrollTop 차이점
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
            var fontRateH3 = 0.082758621;//h3글자크기(24px)/텍스트박스너비; = 24/txtBoxW;
            var fontRateH4 = 0.037931034;//h4글자크기/텍스트박스너비; = 11/txtBoxW;
            var fontRateP = 0.048275862;//p글자크기/텍스트박스너비; = /txtBoxW;
            var fontSizeH3 = 0;//텍스트박스 너비 * 24px의 비율
            var fontSizeH4 = 0;//텍스트박스 너비 * 24px의 비율
            var fontSizeP =  0;//텍스트박스 너비 * 24px의 비율
            var boxHRate = 1.2222222;
            var boxH = boxW * boxHRate; //박스높이 = 
            var boxW = 450;박스너비 * 박스 높이의 비율;
            var winH = 0;
            var boxT = 0; //(창높이-박스높이)/2;
            var winW = 0;
            var boxR = 0; // 박스의 right 값 구하기 = (창 넓이=winW - 박스넓이) / 2;
            var boxL = 0; // 박스의 left 값 구하기 = (창 넓이=winW - 박스넓이) / 2; = boxR

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
            boxT = (winH-boxH)/2; //(창높이-박스높이)/2;
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
                    $(".content24").stop().animate({right:boxR,},300);//css는 그냥 위치만 바뀌고 animate는 움직이는것
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