/*shoppingCart ----js*/
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
//================shoppingCart================//
var $shoppinglist = $('#shopping-con .goods .goodsbody');
for (var i = 0; i < 6; i++) {
   $shoppinglist.append('<li class="shoppinglis">\
                        <div>\
                            <p>\
                                <input type="checkbox">\
                                <img src="../images/list ('+(i+1)+').jpg">\
                                <span>宝山仓</span>\
                            </p>\
                            <p>狮王 祛痘膏14g</p>\
                            <p>最大购买量（10）</p>\
                            <p class="shopping-price">￥80.00</p>\
                            <p class="shopping-delete1">删除</p>\
                        </div>\
                        <div>\
                            <ul>\
                                <li><input type="checkbox"></li>\
                                <li>标配 : 标配</li>\
                                <li>\
                                    <p class="shopping-cut">-</p>\
                                    <p>1</p>\
                                    <p class="shopping-add">+</p>\
                                    <p>（库存10）</p>\
                                </li>\
                                <li>￥80.00</li>\
                                <li class="shopping-delete2">删除</li>\
                            </ul>\
                            <ul>\
                                <li>小计：<span>1</span> 种/<span class="shopping-num">1</span> 件</li>\
                                <li><span class="shopping-total">￥80.00</span>(不含运费)</li>\
                            </ul>\
                        </div>\
                    </li>')
};
var $shoppinglis = $shoppinglist.find('>li');
var $shoppingNum = 0;
var $shoppingNum1 = 0;
for (var i = 0; i < 6; i++) {
    //
    $shoppinglis.eq(i).find('.shopping-delete1').on('click',function(){
        $(this).closest('.shoppinglis').remove();
    });
    $shoppinglis.eq(i).find('.shopping-delete2').on('click',function(){
        $(this).closest('.shoppinglis').remove();
    });
    //
    $shoppinglis.eq(i).find('.shopping-cut').on('click',function(){
        $shoppingNum = parseInt($(this).next().html())
        if ($shoppingNum==1) {
            $shoppingNum=1;
        }else{
            $shoppingNum--;
        }

        $(this).next().html($shoppingNum);
        $(this).parents('.shoppinglis').find('.shopping-num').html($shoppingNum);
        var $total = $(this).parents('.shoppinglis').find('.shopping-price').html();
        $(this).parents('.shoppinglis').find('.shopping-total').html('￥'+($total.replace(/￥/,'')*$shoppingNum))
    });
    //
    $shoppinglis.eq(i).find('.shopping-add').on('click',function(){
        $shoppingNum = parseInt($(this).prev().html())
        $shoppingNum++;
        $(this).prev().html($shoppingNum);
        $(this).parents('.shoppinglis').find('.shopping-num').html($shoppingNum);
        var $total = $(this).parents('.shoppinglis').find('.shopping-price').html();
        $(this).parents('.shoppinglis').find('.shopping-total').html('￥'+($total.replace(/￥/,'')*$shoppingNum));
    });
};
//
var $checkAllTop = $('#shopping-con .goods .goodstit').find('[type=checkbox]');
var $checkAllBot = $('#shopping-con .goodscount').find('[type=checkbox]');
var $checkbox = $('#shopping-con .goods .goodsbody').find('[type=checkbox]');

$checkAllTop.on('click',function(){
    if ($checkAllTop.get(0).checked) {
        $checkbox.prop('checked',true); //attr and  prop
        $checkAllBot.prop('checked',true);
        shoppingTotalAll();
    }else{
        $checkbox.prop('checked',false);
        $checkAllBot.prop('checked',false);
        $('.shopping-total-all').html('￥'+ 0);
    }
});
$checkAllBot.on('click',function(){
    if ($checkAllBot.get(0).checked) {
        $checkbox.prop('checked',true); //attr and  prop
        $checkAllTop.prop('checked',true);
        shoppingTotalAll()
    }else{
        $checkbox.prop('checked',false);
        $checkAllTop.prop('checked',false);
        $('.shopping-total-all').html('￥'+ 0);
    }
})
//全选计算总金额
function shoppingTotalAll(){
    var $shoppingTotalAll = 0;
    for (var i = 0; i < $('.shopping-total').length; i++) {
       $shoppingTotalAll +=Number($('.shopping-total').eq(i).html().replace(/￥/,''))
    };
    return $('.shopping-total-all').html('￥'+ $shoppingTotalAll);
};
//
