$(document).ready(function() {
		var u=navigator.userAgent.toLocaleLowerCase();
		if(u.indexOf("msie 7.0")>-1){
			$("body").html("您当前的ie浏览器版本过低,请升级至ie8及以上版本或使用其他主流浏览器");
		}		
	});



var i = 0;
$(".nav .sanhang").click(function() {

    if (i == 0) {
        $(".nav .xl").animate({ "height": 250 }, 300);
        $(".nav .sanhang div").eq(0).css({ "transform": "rotate(40deg)" });
        $(".nav .sanhang div").eq(1).css({ "opacity": "0" });
        $(".nav .sanhang div").eq(2).css({ "transform": "rotate(-40deg)" });
        i = 1;
    } else {
        $(".nav .xl").animate({ "height": 0 }, 300);
        $(".nav .sanhang div").css({ "transform": "rotate(0deg)", "opacity": "1" });
        i = 0;
    }
})

$('.carousel').carousel({
    interval: 3000,
})

var a = ["images/1.wsz.jpg", "images/2.wsz.jpg"];
// 轮播左右小点
$(".car").mouseenter(function() {
    $(".car a").css("opacity", 1)
})

$(".car").mouseleave(function() {
    $(".car a").css("opacity", 0)
})

$(".car .left").mouseenter(function() {
    if ($(".car ol .active").attr("data-slide-to") == 0) {
        $(".car .left img").attr("src", a[1]).stop().animate({ "width": 200, "opacity": 1 }, 300);
    } else { $(".car .left img").attr("src", a[0]).stop().animate({ "width": 200, "opacity": 1 }, 300); }
}).mouseleave(function() {
    $(".car .left img").stop().animate({ "width": 0 }, 300);
})

$(".car .right").mouseenter(function() {
    if ($(".car ol .active").attr("data-slide-to") == 0) {
        $(".car .right img").attr("src", a[1]).stop().animate({ "width": 200, "opacity": 1 }, 300);
    } else { $(".car .right img").attr("src", a[0]).stop().animate({ "width": 200, "opacity": 1 }, 300); }
}).mouseleave(function() {
    $(".car .right img").stop().animate({ "width": 0 }, 300);
})



// 第二个轮播
function djlb() {
    $(".wtlb .ban img").attr("class", "hidden-xs");
    $(".wtlb .ban img[data=2]").attr("class", "");
    $(".wtlb .ban img").css({ "transform": "scale(1)", "opacity": "0.5" });
    $(".wtlb .ban img[data=0]").animate({ "left": "5%" }, 0);
    $(".wtlb .ban img[data=1]").css("left", "25%");
    $(".wtlb .ban img[data=2]").css({ "left": "45%", "transform": "scale(1.5)", "opacity": "1" });
    $(".wtlb .ban img[data=3]").css("left", "65%");
    $(".wtlb .ban img[data=4]").css("left", "85%");

    $(".wtlb h2").text($(".wtlb .ban img[data=2]").attr("data-2"));
    $(".wtlb h3").text($(".wtlb .ban img[data=2]").attr("data-3"));
};
djlb();


$(".wtlb p:nth-child(3)").click(function() {

    $(".wtlb .ban img").each(function(i, e) {
        if ($(e).attr("data") < 4) {
            $(e).attr("data", Number($(e).attr("data")) + 1);
        } else if ($(e).attr("data") == 4) {
            $(e).attr("data", "100").css("left", "105%");
            var img = $(e).clone();
            img.attr("data", 0).css("left", "-15%");
            setTimeout(function() { $(e).remove() }, 500);
            $(".wtlb .ban").prepend(img);
        }
    })
    djlb();
})

$(".wtlb p:nth-child(2)").click(function() {

    $(".wtlb .ban img").each(function(i, e) {
        if ($(e).attr("data") > 0) {
            $(e).attr("data", Number($(e).attr("data")) - 1);
        } else if ($(e).attr("data") == 0) {
            $(e).attr("data", "-100").css("left", "-15%");
            var img = $(e).clone();
            img.attr("data", 4).css("left", "105%");
            setTimeout(function() { $(e).remove() }, 500);
            $(".wtlb .ban").append(img);
        }
    })
    djlb();
})

// <768px
$(".wtlb p:nth-child(4)").click(function() {
    $(".wtlb .ban img").each(function(i, e) {
        if ($(e).attr("data") > 0) {
            $(e).attr("data", Number($(e).attr("data")) - 1);
        } else if ($(e).attr("data") == 0) {
            $(e).attr("data", "-100").css("left", "-15%");
            var img = $(e).clone();
            img.attr("data", 4).css("left", "105%");
            setTimeout(function() { $(e).remove() }, 500);
            $(".wtlb .ban").append(img);
        }
    })
    djlb();
})

$(".wtlb p:nth-child(5)").click(function() {
    $(".wtlb .ban img").each(function(i, e) {
        if ($(e).attr("data") < 4) {
            $(e).attr("data", Number($(e).attr("data")) + 1);
        } else if ($(e).attr("data") == 4) {
            $(e).attr("data", "100").css("left", "105%");
            var img = $(e).clone();
            img.attr("data", 0).css("left", "-15%");
            setTimeout(function() { $(e).remove() }, 500);
            $(".wtlb .ban").prepend(img);
        }
    })
    djlb();
})

// 点击显示二维码
$(".nav .xz").click(function(){
	$(".xzai").css("display","block");
})
$(".xzai .dw img:last-child").click(function(){
	$(".xzai").css("display","none");
})

var ltlis=$(".shouj img");

for(i=0;i<ltlis.length;i++){

}




////////////
 $(".wdtnwsma .sj .tuyi").mouseenter(function() {
        $(".sj .tu2").animate({
            opacity: '1',
        }, "500");
    });
    $(".wdtnwsma .sj .tuyi").mouseleave(function() {
        $(".sj .tu2").stop(true, true);

        $(".sj .tu2").animate({
            opacity: '0',
        }, "500");
    });
    $(".wdtnwsma .wx .tuyi").mouseenter(function() {
        $(".wx .tu2").animate({
            opacity: '1',
        }, "500");
    });
    $(".wdtnwsma .wx .tuyi").mouseleave(function() {
        $(".wx .tu2").stop(true, true);
        $(".wx .tu2").animate({
            opacity: '0',
        }, "500");
    });



