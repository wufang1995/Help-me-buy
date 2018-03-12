/*list----js*/
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
//=============list-con======================//
var $listgoods = $('#list-con .listgoods ul');
for (var i = 1; i < 17; i++) {
    $listgoods.append('<li>\
                        <a href="#">\
                        <img src="../images/list ('+i+').jpg">\
                        <p>lapalette 新款小马装饰手提包</p>\
                        <p><span>￥1086.48</span><span>￥1303.46</span><span>正品</span></p>\
                        <p>9.9</p></a>\
                    </li>')
};
