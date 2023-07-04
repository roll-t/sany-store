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
        // neu hong thich thi goi ben model thong thuong cung duoc
        // $this->data['sub_content']['list_client']=$this->modelHome->getList();//model qua xu ly

        $updateData=[
            'kh_ten'=>'pham phuoc school ',
            'kh_taiKhoan'=>'truong_03',
            'kh_mk'=>md5(12345),
            'kh_mail'=>'truong@gamil.com',
            'kh_sdt'=>'0812608562'
        ];
        // $check= $this->db->table('khach_hang')->where('kh_id','=',45)->update($updateData);

        $this->db->table('khach_hang')->insert($updateData);
        // $this->modelHome->deleteUser(39);
        $this->data['sub_content']['title']=$title;
        $this->data['content']='home/home';
        $this->view('layouts/client_layout',$this->data);
    }
    function get_user(){
        // ley loi tu session roi hien ra giao dien xong xoa session
        $request= new Request();
        $this->data['msg']=Session::flash('msg');
        // lay tu helper/function
        // echo toSlug('pham phuoc truong');
        $this->view('request/add',$this->data);

    }

    function post_user(){
        $request= new Request();
        if($request->isPost()){
            // set rules
            $request->rules(
                [
                    'fullName'=>'required|min:5|max:30|unique:user:fullName',
                    'email'=>'required|min:6',
                    'password'=>'required|min:3',
                    'confirmPassword'=>'required|min:3|match:password'
                ]
            );
            // set message
            $request->message(
                [
                    'fullName.required'=>'ho ten khong duoc de trong',
                    'fullName.min'=>'Ho ten khong duoc nho hon 5 ky tu',
                    'fullName.max'=>'ho ten phai nho hon 30 ky tu',
                    'fullName.unique'=>'tai khoan da ton tai',
                    'email.required'=>'email khong duoc de trong',
                    'email.min'=>'email phai lon hon 6 ky tu',
                    'password.required'=>'mat khau khong duoc de trong',
                    'password.min'=>'mat khau phai lon hon 3 ky tu',
                    'confirmPassword.required'=>'nhap lai mat khau khong duoc de trong',
                    'confirmPassword.min'=>'mat khau phai lon hon 3 ky tu',
                    'confirmPassword.match'=>'mat khau khong trung khop',
                ]
            );
            // chi xu ly du lieu roi luu loi vao session
            $validate= $request->validate();
            if(!$validate){
                Session::flash('msg','sai roi lam lai di');               
            }
        }
        $response= new Response();
        $response->redirect('home/get_user');
    }
}
