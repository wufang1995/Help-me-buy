/*
* @Author: Marte
* @Date:   2018-02-05 18:15:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 14:46:24
*/
//手机号注册正则验证
$inputCon1 = $('#register-con div:nth-of-type(1) input');
$inputCon2 = $('#register-con div:nth-of-type(2) input');
$inputCon3 = $('#register-con div:nth-of-type(3) input');
$inputCon1.on('blur',function(){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test($inputCon1.val())) {
      popupWindow('手机号码格式不正确');
    } else {
        $.ajax({
            url: 'http://localhost/logreg.php',
            type: 'GET',
            data: {username: $inputCon1.val()},
            async : true,
            success : function(data){
               popupWindow(data);
               setTimeout(function(){ window.location.href = "../html/login.html" },1000)
            },
            error : function(err) {
               popupWindow('404');
            }
        })
    }
});
$inputCon2.on('blur',function(){
    var myreg=/^[0-9a-zA-z]{4}$/;
    if (!myreg.test($inputCon2.val())) {
      popupWindow('图形验证码不正确');
    } else {
      return true;
    }
});
$inputCon3.on('blur',function(){
    var myreg=/^[0-9]{4}$/;
    if (!myreg.test($inputCon3.val())) {
      popupWindow('短信验证码不正确');
    } else {
      return true;
    }
});

function popupWindow(val){
    var $pageW = $(window).width();
    var $pageH = $(window).height();
    var $pageH2 = $(window).height()>$(document).height() ?$(window).height() : $(document).height();
    var $hintWindow = $('<div id="hit-window" style="left:'+($pageW-300)/2+'px;top:'+($pageH-180)/2+'px">\
            <p class="top">消息</p>   \
            <p class="middle">'+val+'</p>\
            <p class="bottom">确定</p> \
        </div>');

    var $mark = $('<div id="mark" style="width:'+$pageW+'px;height:'+$pageH2+'px"></div>')
    $('body').prepend($hintWindow,$mark);
    $('#hit-window .bottom').on('click',function(){
        $('#hit-window').remove();
        $('#mark').remove();
    })
}

//

