<?php
class Home extends Controller{
    public $modelHome,$data;
    
    function __construct()
    {
        $this->modelHome=$this->model('HomeModel');
    }

    public function index(){
        $title='trang chu';
        // doi voi nhung cau lenh sql don gian co the goi sql truc tiep ben model base
        $value=$this->modelHome->find(17);// model base
        // neu hong thich thi goi ben model thong thuong cung duoc
        // $this->data['sub_content']['list_client']=$this->modelHome->getList();//model qua xu ly
        $this->data['sub_content']['title']=$title;
        $this->data['content']='home/home';
        $this->view('layouts/client_layout',$this->data);
    }
}