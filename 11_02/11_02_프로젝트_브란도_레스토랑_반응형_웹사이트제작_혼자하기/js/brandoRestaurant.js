;(function(window, document, $, undefined){
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
        headerFn : function(){

        },
        section01Fn : function(){
            var s1H = 0;
            
            setTimeout(resizeFn,100);
            function resizeFn() {
                s1H = $(window).height();
                $("#section01, #section02, #section03, #section04").css({ height:s1H });
                // console.log(s1H);
            }
            $(window).resize(function(){
                resizeFn();
            });

        },
        section02Fn : function(){

        },
        section03Fn : function(){

        },
        section04Fn : function(){

        },
        section05Fn : function(){

        },
        section06Fn : function(){

        },
        section07Fn : function(){

        },
        section08Fn : function(){

        },
        section09Fn : function(){

        },
        section10Fn : function(){

        },
        section11Fn : function(){

        },
        section12Fn : function(){

        },
        section13Fn : function(){

        },
        footerFn : function(){

        }
    }
    brando.init();
})(window, document, jQuery);