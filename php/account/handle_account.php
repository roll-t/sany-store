<?php
$password=isset($_GET['forgotPassword'])?$_GET['forgotPassword']:'';
echo 'Mật khẩu của bạn là: '.$password;