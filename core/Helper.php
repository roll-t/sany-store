<?php
$sessionKey=Session::isInvalid();
$errors=Session::flash($sessionKey.'_errors');
$olds=Session::flash($sessionKey.'_olds');

if(!function_exists('form_error')){
    function form_error($fieldName,$before='',$after=''){
        global $errors;
        if(!empty($errors) && array_key_exists($fieldName,$errors)){
            return $before.$errors[$fieldName].$after ;
        }
    }
}
if(!function_exists(('old'))){
    function old($fieldName,$default=''){
        global $olds;
        if(!empty($olds[$fieldName])){
            return $olds[$fieldName];
        }else{
            return $default;
        }
    }
}