
<link rel="stylesheet" href="<?php echo _WEB_ROOT?>/public/assets/admin/css/product.css">
<h1 class="title">Danh sách sản phẩm</h1>
<?php
?>
<div class="body-list-product">
    <div class="headline-list-product">
        <div class="left">
            <form action="<?php echo _WEB_ROOT?>/admin/product/add_product" method="post">
                <div class="group-input btn">
                    <input type="submit" value="Thêm Sản phẩm" class="submit-btn">
                </div>
            </form> 
            </div>
            <div class="right">
            <form style="display:flex;algin-items:center"  action="<?php echo _WEB_ROOT?>/admin/product/filter_product" method="post">   
            <div class="group-input">
                <select name="dm_id" class="select-input" id="">
                    <option value="" disabled selected>Tất cả</option>
                    <?php
                    if(!empty($categoryList)){
                        foreach($categoryList as $key=>$category){
                          echo '<option value="'.$category['dm_id'].'">'.$category['dm_ten'].'</option>';
                        }
                    }
                    ?>
                </select> 
                <input type="submit" name="confirmFilterCategory" value="Tìm Kiếm">
            </div>
        </form>
            <div class="group-input">
                <input type="text" placeholder="nhập tên sản phẩm">
                <input type="submit" value="Tìm kiếm">
            </div>
        </div>
    </div>
    <div class="list-product">
        <?php
        if(!empty($listProduct)){
            foreach($listProduct as $key=>$value){
                $img=$value['sp_img'];
                $arrImg=explode('|',$value['sp_img']);
                echo '
                <input type="hidden" value='.$value['sp_id'].' />
                <div class="product-items">
                <div class="left">
                    <div class="img-product">
                        <img class="img img-product-js img-main" src="'._WEB_ROOT.'/public/imgs/product/listProduct/'.$arrImg[0].'" alt="">
                    </div>
                    <div class="name-product">
                        '.$value['sp_ten'].'
                    </div>
                    <div class="price-product">
                        '.$value['sp_gia'].' vnd
                    </div>
                </div>
                <div class="right">
                    <div class="action">';
                        ?>
                        <div class="action-items">
                            <a href="<?php echo _WEB_ROOT?>/admin/product/edixProduct?sp_id=<?php echo $value['sp_id']; ?>" name="deleteCatalog"> 
                            <ion-icon name="open-outline"></ion-icon>
                        </div>
                        <div class="action-items">
                            <a href="<?php echo _WEB_ROOT?>/admin/product/deleteProduct?sp_id=<?php echo $value['sp_id']; ?>" name="deleteCatalog"> 
                            <ion-icon name="trash-outline"></ion-icon>
                            </a> 
                        </div>
                        <?php
                    echo '</div>
                </div>
            </div>';
            }
        }
        ?>  
    </div>
</div>
