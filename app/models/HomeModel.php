<?php
class HomeModel extends Model{
    protected $_table='khach_hang';
    public function getList(){
        $data=$this->db->query('SELECT * FROM '.$this->_table.'')->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }
}