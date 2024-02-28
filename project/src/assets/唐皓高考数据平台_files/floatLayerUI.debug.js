/*
*　标题:  右下角弹出浮动信息层
*　作者:  赵阳
*　时间:  2010-07-27
*　描述:  模仿QQ在页面右下角弹出浮动信息层
*
*
*  exp:$.fn.floatLayerUI({
*                   floatDivId: "divNoticeMsg", closeCtrlId: "divNoticeMsgclose", css: { height: 185 }
*               });
*/
(function($) {
    $.extend($.fn, {
        floatLayerUI: function(opts) {
            $.fn.floatLayerUI.defaults = {
                floatDivId: null,
                closeCtrlId: null,
                css: {
                    height: "185"
                }
            };
            var settings = $.extend($.fn.floatLayerUI.defaults, opts);

            var floatDivAddCss = {
                "z-index": "1",
                right: "0",
                bottom: "0",
                overflow: "hidden",
                position: "absolute",
                _position: "absolute"
            };
            $("#" + settings.floatDivId).css(floatDivAddCss);

            if ($(window).scrollTop() > 0) {

                $("#" + settings.floatDivId).css("bottom", (-$(window).scrollTop()) + "px");
                // if ($.browser.msie && $.browser.version == "6.0") {
                //     $("#" + settings.floatDivId).css("_margin-bottom", (-$(window).scrollTop()) + "px");
                // }
                // else {
                //     $("#" + settings.floatDivId).css("bottom", (-$(window).scrollTop()) + "px");
                // }
            }
            $("#" + settings.floatDivId).css("height", '0px');
            $("#" + settings.floatDivId).css("display", "block");
            $("#" + settings.floatDivId).animate({ height: "+" + settings.css.height + "px" }, 800);

            $("#" + settings.closeCtrlId).click(function() {
                $("#" + settings.floatDivId).animate({ height: "-0px" }, 200, function() {
                    $("#" + settings.floatDivId).css("display", "none");
                });
            });
            $(window).scroll(function() {

                $("#" + settings.floatDivId).css("bottom", (-$(window).scrollTop()) + "px");
                // if ($.browser.msie && $.browser.version == "6.0") {
                //     $("#" + settings.floatDivId).css("_margin-bottom", (-$(window).scrollTop()) + "px");
                // }
                // else {
                //     $("#" + settings.floatDivId).css("bottom", (-$(window).scrollTop()) + "px");
                // }
            });
        }
    });
})(jQuery);