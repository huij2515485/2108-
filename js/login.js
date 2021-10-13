require(["config"], function(){
    require(["jquery", "header", "footer", "cookie"], function($){
        // 配置 cookie 自动转换JSON文本
        $.cookie.json = true;

        $(".form_login").on("submit", function(e){
            // 获取登录表单中的用户名与密码数据
            const data = $(this).serialize();
            console.log(data);
            // ajax 登录
            $.post("http://localhost/my/api/login.php", data, function(data){
                console.log(data);
                if (data.res_code === 1) {
                    alert("用户登录成功");

                    // 将登录成功的用户信息保存到 cookie 中
                    $.cookie("login_user", data.res_body, {path: "/"});

                    location = "/index.html";
                } else {
                    alert("用户名或密码错误");
                }
            }, "json");

            // e.preventDefault(); // 阻止默认行为
            // e.stopPropagation(); // 阻止事件传播
            return false; // 两个都阻止
        });
    });
});