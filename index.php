<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once ('./view/head.php') ?>
    <title>Website quanao</title>
</head>

<body>
   <div class="wrapper">
    <?php require_once ('./view/header.php')?>
    <?php 

    echo ' <script src="./js/method.js"></script><script src="./js/input/Input_1.js"></script><script src="./js/slide/Slide.js"></script>';
    
    $defaultPage='home';

    if(isset($_REQUEST['page'])){
        $page = $_REQUEST['page'];
        require_once ('./view/'.$page.'.php');
    }else{
        require_once ('./view/'.$defaultPage.'.php');
    }
    ?>
    <?php require_once ('./view/footer.php') ?>
   </div>
   
</body>
<script src="./js/header/header_site/header_sticky.js"></script>
<script src="./js/header/header_site/search.js"></script>
<script src="./js/cart/show.js"></script>
<script src="./js/cart/add_cart.js"></script>
</html>