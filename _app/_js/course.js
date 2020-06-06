//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    $('.more-button').fancybox();


    /*Конец документа*/
});