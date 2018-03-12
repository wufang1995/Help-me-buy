/*
* @Author: Marte
* @Date:   2018-02-03 15:01:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-04 19:07:42
*/
//=============sidenav   点击返回顶部======================//
var $liElem = $('#sidenav ul li');
$liElem.eq(5).on('click',function(){
    //$(window).scrollTop('0px');
    $('body,html').animate({scrollTop:0},1000);
    return false;
});
//=============fixed-top-nav 顶部固定导航======================//
var $fixedTopNav = $('#fixed-top-nav');
var $topNav = $('#top-nav');
$fixedTopNav.css('display','none');
$(window).on('scroll', function() {
    if ($(window).scrollTop()>$topNav.offset().top) {
        $fixedTopNav.css('display','block');
    }else{
        $fixedTopNav.css('display','none');
    }
});
//=============detail-con2 左侧商品信息======================//
$list = $('#detail-con2 .l ul');
for (var i = 1; i < 7; i++) {
    $list.append('<li>\
                    <img src="../images/detailside'+i+'.jpg">\
                    <p>正官庄 6年根高丽参【良字号】 20支</p>\
                    <p>￥288.77 ~ ￥327.27</p>\
                    <p>￥700</p>\
                </li>')
};
//=============detail-con2 右侧选项卡======================//
$btn = $('#detail-con2 .r .tit button');
$con1 = $('#detail-con2 .r .con1');
$con2 = $('#detail-con2 .r .con2');
$btn.eq(0).on('click',function(){
    $con1.css('display','block');
    $con2.css('display','none');
    $btn.eq(1).removeClass('btnstyle');
    $(this).addClass('btnstyle');
});
$btn.eq(1).on('click',function(){
    $con1.css('display','none');
    $con2.css('display','block');
    $btn.eq(0).removeClass('btnstyle');
    $(this).addClass('btnstyle');
})




