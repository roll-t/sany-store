<?php
// modle lay du lieu tu database

abstract class Model extends Database{
    protected $db;
    function __construct()
    {
        $this->db= new Database();
    }

    //dinh nghia 1 bang
    // khởi tạo phương thức trù tượng
    abstract function tableFill();
    abstract function fiedFill(); 
    abstract function primaryKey();
    function all(){
        $tableName=$this->tableFill();
        $fiedSelect=$this->fiedFill();
        if(empty($fiedSelect)){
            $fiedSelect='*';
        }
        $sql="SELECT $fiedSelect FROM $tableName";
        $query=$this->db->query($sql);
        if(!empty($query)){
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return false;
        }
    }

    function find($id=''){   
        $tableName=$this->tableFill();
        $fiedSelect=$this->fiedFill();
        $primaryKey=$this->primaryKey();
        if(empty($fiedSelect)){
            $fiedSelect='*';
        }
        $sql="SELECT $fiedSelect FROM $tableName WHERE $primaryKey='$id'";
        $query=$this->db->query($sql);
        if(!empty($query)){
            return $query->fetch(PDO::FETCH_ASSOC);
        }else{
            return false;
        }
    }


}