<?php 
class Routes{
    function handleRoutes($url){
        global $routes;
        $url=ltrim($url,'/');
        $handleUrl=$url;
        if(!empty($routes)){
            foreach($routes as $key=>$value){
                if(preg_match('~'.$key.'~is',$url)){
                    $handleUrl=preg_replace('~'.$key.'~is',$value,$url);
                }
            }
        }
        return $handleUrl;
    }

}