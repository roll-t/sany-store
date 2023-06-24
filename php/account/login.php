<?php
include '../query.php';

if(isset($_GET['nameLogin'])){
    $name=$_GET['nameLogin'];
    $sql="SELECT * FROM `KHACH_HANG` WHERE kh_taiKhoan='".$name."'";
    $value= selectValueAll($sql);
    if(count($value)>0){
      $account=[
        'name'=>$value[0][2],
        'password'=>$value[0][3]
      ];
      set_cookie('acccountSanny',json_encode($account),30);
        echo $value[0][3];
    }else{
        echo false;
    }
}
?>