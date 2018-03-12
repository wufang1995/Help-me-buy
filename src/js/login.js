/*
* @Author: Marte
* @Date:   2018-02-05 18:07:15
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 14:48:00
*/
//输入的手机号正则验证
$login= $('#login-con div:nth-of-type(2) input');
$loginbtn= $('#login-con div:nth-of-type(2) button');
$loginbtn.on('click',function(){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test($login.eq(0).val())) {
      popupWindow('手机号码格式不正确');
    } else {
      $.ajax({
            url: 'http://localhost/logreg2.php',
            type: 'GET',
            data: {username: $login.eq(0).val()},
            async : true,
            success : function(data){
               if (data) {
                    popupWindow('登录成功，正在跳转');
               setTimeout(function(){ window.location.href = "../html/index.html" },500)
                }else{
                    popupWindow('登录失败，请检查账号密码');
                }
            },
            error : function(err) {
               popupWindow('404');
            }
        })
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