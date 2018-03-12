/*
* @Author: Marte
* @Date:   2018-02-02 08:48:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-03 08:41:39
*/
//===================slideshow   轮播图==================//
var slideshow = document.getElementById('slideshow');
var list = document.getElementsByClassName('list')[0];
var listLi = list.getElementsByTagName('li');
var btn = document.getElementsByClassName('btn')[0];
var btnLi = btn.getElementsByTagName('li');
var num = 0;
var timer;
for (var i = 0; i < listLi.length; i++) {
    listLi[i].style.width = window.innerWidth + 'px';
};
for(var i=0;i<btnLi.length;i++){

    btnLi[i].index = i;

    btnLi[i].onmouseover = function(){
        for(var i=0;i<btnLi.length;i++){
            btnLi[i].className = '';
        }
        this.className = 'active';
        list.style.left = - this.index * window.innerWidth + 'px';
        num = this.index;
    };
}

slideshow.onmouseover = function(){
    clearInterval(timer);
};
slideshow.onmouseout = function(){
    timer = setInterval(run,3000);
};

timer = setInterval(run,3000);

function run(){
    for(var i=0;i<btnLi.length;i++){
        btnLi[i].className = '';
    }
    if(num == btnLi.length-1){
        num = 0;
    }
    else{
        num++;
    }
    btnLi[num].className = 'active';
    list.style.left = - num * window.innerWidth + 'px';
}
//=============new goods   动态添加======================//
var $newGoodsList = $('#newgoods .w .newgoods ul');
for (var i = 1; i < 10; i++) {
    $newGoodsList.get(0).innerHTML+='\
        <li>\
            <a href="#">\
                <dl>\
                    <dt><img src="../images/new goods'+i+'.jpg"></dt>\
                    <dd>悦诗风吟</dd>\
                    <dd>【保税商品】innisfree悦诗风吟</dd>\
                </dl>\
            </a>\
        </li>'
};
//=============hot goods   动态添加======================//
var $hotGoodsList = $('#hotgoods .w .hotgoods ul');
for (var i = 1; i < 40; i++) {
    $hotGoodsList.get(0).innerHTML+='\
        <li>\
                        <a href="#">\
                            <dl>\
                                <dt><img src="../images/hotgoods('+i+').jpg"/></dt>\
                                <dd>9.2</dd>\
                                <dd>[正官庄] 正官庄 6年根高丽参【良字号】 </dd>\
                                <dd>￥288.77 ~ ￥350.64</dd>\
                                <dd>最小起订量：1 盒 <span>正品</span></dd>\
                            </dl>\
                        </a>\
                    </li>'
};
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


