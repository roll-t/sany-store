<?php
include '../query.php';
if($_SERVER['REQUEST_METHOD']==='POST'){
    if(isset($_POST['confirmSignUp'])){
        $name=$_POST['userName'];
        $mail=$_POST['mail'];
        $phone=$_POST['phone'];
        $password=$_POST['password'];
        $sql="INSERT INTO `khach_hang` (`kh_id`, `kh_ten`, `kh_taiKhoan`, `kh_mk`, `kh_mail`, `kh_sdt`)
         VALUES (NULL, ' ', '".$name."', '".$password."', '".$mail."', '".$phone."')";
        $success= insertValue($sql);
        if($success){
            if($success){
                header("Location: ../../index.php?page=login");
                exit();
            }
        }
    }
}

?>