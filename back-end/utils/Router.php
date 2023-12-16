<?php

class Router{

    public static function get($uri, $callback){
        if($_SERVER['REQUEST_URI']==$uri && $_SERVER['REQUEST_METHOD']=='GET'){
            $callback();
            die();
        }
    }

    public static function post($uri, $callback){
        if($_SERVER['REQUEST_URI']==$uri && $_SERVER['REQUEST_METHOD']=='POST'){
            $callback();
            die();
        }
    }
    
    
}
?>

