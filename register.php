 <?php 
    // header("Access-Control-Allow-Origin:*");

    // 获取注册用户信息
    $user= $_POST["user"];    
    $pwd = $_POST["pwd"];

    $link = mysqli_connect('127.0.0.1','root','root','test');
    $sql = "select user from user";
    // mysqli_query("insert into user(user,pwd) values ('".$user."','".$pwd."')");
    $res1=mysqli_query($link,$sql);
    $arr1 = [];
    while($row1=mysqli_fetch_assoc($res1)){
    $arr1[] = $row1;}
    // echo $arr;
    $count=0;
    for($i=0;$i<count($arr1);$i++){
    // echo implode($arr1[$i]);
       
        if(!(implode($arr1[$i])==$user)){
           $count=$count+1;
           
                if($count==count($arr1)-1){
                    $sql= "insert into user (user,pwd) values('$user','$pwd')";
                    mysqli_query($link,$sql);
                    echo 1;
                    exit;
                }else{
                    echo '';
            
                    }
        }else{
            echo '';

            }
    }
 ?> 