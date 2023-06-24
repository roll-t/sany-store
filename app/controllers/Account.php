<?php
class Account extends Controller{
    public $accountModel,$data;
    function __construct()
    {
        
    }
    public function index(){
        $this->data['content']='account/login';
        $this->data['sub_content']['title']='trang dang nhap';
        $this->view('layouts/client_layout',$this->data);
    }
    public function signUp(){
        $this->data['content']='account/sign_up';
        $this->data['sub_content']['title']='trang dang nhap';
        $this->view('layouts/client_layout',$this->data);
    }
}