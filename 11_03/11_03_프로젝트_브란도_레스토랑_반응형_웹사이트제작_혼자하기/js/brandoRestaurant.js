;(function(window,document,$,undefined){
    var brando = {
        init : function(){
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
        },
        headerFn : function(){},
        section01Fn : function(){
            //윈도우 창 높이 = winT
            var winH = 0;
            var mainT = 0;
            var imgT = 0;
            
            setTimeout(resizeFn,100);
        
            function resizeFn(){
                winH = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:winH }) //섹션 1~4의 높이는 모두 winH 값에 맞춰라 
                //hungry 이미지 높이 값 = mainT
                mainT = $(".main-txt").height();
                //이미지 탑 값 = imgT(윈도우 창 높이-이미지 높이 값)/2
                imgT = (winH-mainT)/2;
                $(".main-txt").css({ top:imgT }); //Top값으로 이미지를 중앙으로 배치할 수 있는 원리로 창이 움직일 때마다 중앙에 정렬되도록 움직이게 함
            }
        $(window).resize(function(){
            resizeFn();
        });

        //Smooth Scrolling
        $(".arrow-down").on({
            click : function(){
                $("html, body").stop().animate({ scrollTop : $("#section02").offset().top },700)
                // html,document는.(버블링방지).움직인다({html,document의 스크롤 탑 값이 = 섹션02의 탑값까지만},0.7초 동안에)                         
            }
        })

        },

        section02Fn : function(){},
        section03Fn : function(){},
        section04Fn : function(){},
        section05Fn : function(){},
        section06Fn : function(){},
        section07Fn : function(){},
        section08Fn : function(){},
        section09Fn : function(){},
        section10Fn : function(){},
        section11Fn : function(){},
        section12Fn : function(){},
        section13Fn : function(){},
        footerFn : function(){}
    }

    brando.init();

})(window,document,jQuery);