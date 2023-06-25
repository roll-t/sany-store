<?php
class HomeModel extends Model{
    private $__table='khach_hang';
    // phuong thức trù tượng
    function tableFill(){
        return 'khach_hang';
    }
    function fiedFill(){
        return '*';
    }
    function primaryKey(){
        return 'kh_id';
    }
    // co the select nhu bth
    public function getList(){
        $data=$this->db->query("SELECT * FROM $this->__table")->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }
    public function getListClient(){
       $data= $this->db->table('khach_hang')->where('kh_id','<',20)->select('kh_id, kh_sdt')->getValue();
       return $data;
    }

    public function getDetail($id){
        $data=$this->db->table('khach_hang')->whereLike('kh_taiKhoan','%3%')->first();
        return $data;
    }
}