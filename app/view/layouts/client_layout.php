<html>
    <?php $this->view('blocks/head')?>
    <link rel="stylesheet" href="<?php echo _WEB_ROOT?>/public/assets/client/css/app.css">
    <link rel="stylesheet" href="<?php echo _WEB_ROOT?>/public/assets/client/css/header.css">
    <link rel="stylesheet" href="<?php echo _WEB_ROOT?>/public/assets/client/css/cart.css">
    <link rel="stylesheet" href="<?php echo _WEB_ROOT?>/public/assets/client/css/footer.css">
    <script src="<?php echo _WEB_ROOT?>/public/assets/client/js/slide/Slide.js"></script>
    <script src="<?php echo _WEB_ROOT?>/public/assets/client/js/input/Input_1.js"></script>
    <script src="<?php echo _WEB_ROOT?>/public/assets/client/js/method/Toggle.js"></script>
    <body>
        <?php 
        $this->view('blocks/header');
        $this->view($content,$sub_content);
        if(!empty($sub_content['list_client'])){
            foreach ($sub_content['list_client'] as $value){
                var_dump($value['kh_taiKhoan']);
            }
        }
        $this->view('blocks/footer');
        ?>
    </body>
    <script src="<?php echo _WEB_ROOT?>/public/assets/client/js/header/search.js"></script>
    <script src="<?php echo _WEB_ROOT?>/public/assets/client/js/header/header_sticky.js"></script>
    <script src="<?php echo _WEB_ROOT?>/public/assets/client/js/cart/show.js"></script>
</html>

