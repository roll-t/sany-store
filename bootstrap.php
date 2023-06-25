<?php

define('_DIR_ROOT',__DIR__);

// xu ly http root
if(!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on'){
    $web_root='https://'.$_SERVER['HTTP_HOST'];
}else{
    $web_root='http://'.$_SERVER['HTTP_HOST'];
}
$folder=str_replace(strtolower($_SERVER['DOCUMENT_ROOT']),'',strtolower(_DIR_ROOT));
$folder=ltrim($folder,'\\');
$web_root=$web_root.'/'.$folder;
define('_WEB_ROOT',$web_root);

// tu dong load configs

$configs_dir=scandir('configs');
if(!empty($configs_dir)){
    foreach ($configs_dir as $key=>$value){
        if($value!='.' && $value!='..' && file_exists('configs/'.$value)){
            require_once 'configs/'.$value;
        }
    }
}

// require_once 'configs/routes.php';
require_once 'core/Routes.php';//load routes
require_once 'app/App.php';//load app
if(!empty($configs['database'])){
    $db_configs=array_filter($configs['database']);
    if(!empty($db_configs)){
        require_once 'core/Connection.php';
        require_once 'core/QueryBuilder.php';
        require_once 'core/Database.php';
        $db=new Database();
    }
}
require_once 'core/Model.php';// load base model    
require_once 'core/Controller.php';// load base controler