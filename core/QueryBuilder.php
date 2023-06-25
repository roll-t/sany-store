<?php
trait QueryBuilder{
    public $tableName='';
    public $where='';
    public $operator='';
    public $selectField='*';
    public function table($tableName){
        $this->tableName=$tableName;
        return $this;
    }
    public function where($field,$compare,$value){
        if(empty($this->where)){
            $this->operator='WHERE';
        }else{
            $this->operator=' AND';
        }
        $this->where.= "$this->operator $field $compare '$value'";
        return $this;
    }
    public function select($field='*'){
        $this->selectField = $field;
        return $this;

    }
    public function orWhere($field,$compare,$value){
        if(empty($this->where)){
            $this->operator='WHERE';
        }else{
            $this->operator=' OR';
        }
        $this->where.= "$this->operator $field $compare '$value'";
        return $this;
    }


    public function whereLike($field,$value){
        if(empty($this->where)){
            $this->operator='WHERE';
        }else{
            $this->operator=' AND';
        }
        $this->where.= "$this->operator $field LIKE '$value'";
        return $this;
    }


    public function getValue(){
        $sqlQuey="SELECT $this->selectField FROM $this->tableName $this->where";
        $query=$this->query($sqlQuey);
        //reset
        $this->tableName='';
        $this->where='';
        $this->operator='';
        $this->selectField='*';
        if(!empty($query)){
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return false;
        }
    }

    public function first(){
        $sqlQuey="SELECT $this->selectField FROM $this->tableName $this->where";
        $query=$this->query($sqlQuey);
        //reset
        $this->tableName='';
        $this->where='';
        $this->operator='';
        $this->selectField='*';
        if(!empty($query)){
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return false;
        }
    }
    
}