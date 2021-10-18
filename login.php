<?php
 
 $user =$_POST['user'];
 $pwd = $_POST['pwd'];
// echo $user;
// echo $pwd;
 // 1 连接mysql
 $link = mysqli_connect('127.0.0.1','root','root','test');
 $sql = "select pwd from user ";
 $sql1= "select user from user ";

 // 2 执行代码
 
 $res1=mysqli_query($link,$sql1);
 $arr1 = [];
 while($row1=mysqli_fetch_assoc($res1)){
   $arr1[] = $row1;
 }
 $res = mysqli_query($link,$sql);
 // 3 取出结果集    
 $arr = [];
 while($row=mysqli_fetch_assoc($res)){
   $arr[] = $row;
 }
//   print_r($arr); 
for($i=0;$i<count($arr);$i++){
    // echo implode($arr[$i]);
if(implode($arr[$i])==$pwd&&implode($arr1[$i])==$user){
    echo 1;
    }

}

?>