<?php
class Home extends Controller{
    public $modelHome,$data;
    
    function __construct()
    {
        $this->modelHome=$this->model('HomeModel');
    }

    public function index(){
        $title='trang chu';
        $this->data['sub_content']['list_client']=$this->modelHome->getList();
        $this->data['sub_content']['title']=$title;
        $this->data['content']='home/home';
        $this->view('layouts/client_layout',$this->data);
    }
}