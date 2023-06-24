<?php
function titleWeb(){
    $title='';
    if(isset($_REQUEST['page'])){
        $page=$_REQUEST['page'];
      switch($page){
        case 'home':
            $title='Sanny trang chủ';
            break;
        case 'login':
            $title='Sanny đăng nhập';
            break;
        case 'sign_up':
            $title='Sanny đăng ký';
            break;
      }  
    }
    return $title;
}