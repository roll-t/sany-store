<?php
define ("_DIR_ROOT",__DIR__);
$root=rtrim(_DIR_ROOT,'\php');

require_once $root.'/core/connection.php';

function alert($value){
    echo "<script type='text/javascript'>alert('$value');</script>";
    return true;
}


function set_cookie($name, $value, $days = 0, $path = '/') {
    $expires = '';
    if ($days !== 0) {
      $expires = time() + ($days * 24 * 60 * 60);
      $expires = gmdate('D, d M Y H:i:s T', $expires);
      $expires = "expires=$expires;";
    }

    setcookie($name, urlencode($value), [
        'expires' => $expires,
        'path' => $path
      ]);
    }


function insertValue($sql){
    global $conn;
    $value=$conn->query($sql);
    return $value;
}

function selectValue($sql){
    global $conn;
    $arr_value=$conn->query($sql)->fetch_assoc();
    return $arr_value;
}
function selectValueAll($sql){
    global $conn;
    $arr_value=$conn->query($sql)->fetch_all();
    return $arr_value;
}


?>