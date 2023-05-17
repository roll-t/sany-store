class ShowBodyHidden{
    constructor(btnShow,btnClose,spaceClose,body){
        this.btnShow=btnShow
        this.btnClose={
            btn:btnClose,
            space:spaceClose
        }
        this.classActive='.select-add-cart';
        this.body=body
        this.showBody();
        this.closeBody()
    }
    showBody(){
        if(this.btnShow.length>0){
            this.btnShow.forEach(items=>{
                items.addEventListener('click',e=>{
                    if(this.body){
                        this.body.classList.add('active')
                    }else{
                        const body=items.parentElement.parentElement.parentElement.querySelector(this.classActive)
                        this.blockActive()
                        body.classList.add('active')
                    }
                })
            })
        }else{
            this.btnShow.addEventListener('click',e=>{
                this.body.classList.add('active')
            })
        }
    }


    closeBody(){
        if(this.btnClose.btn.length>0){
            this.btnClose.btn.forEach(items=>{
                items.addEventListener('click',e=>{
                    const parent=items.parentElement
                    parent.classList.remove('active')
                })
            })
        }else{
            this.btnClose.btn.addEventListener('click',e=>{
                this.body.classList.remove('active')
            })
            if (this.btnClose.space){
                this.btnClose.space.addEventListener('click',e=>{
                    this.body.classList.remove('active')
                })
            }
        }

    }
    blockActive(){
        const listActive=document.querySelectorAll( this.classActive);
        listActive.forEach(items=>{
            items.classList.remove('active')
        })
       
    }
}

//Đóng mở body xem chi tiết sản phẩm
const bodyView=document.querySelector('.body-view-product')
const btnBodyView={
    btnShow:document.querySelectorAll('.list-product .product-item .action .view-more'),
    btnClose:bodyView.querySelector('.right-container .close'),
    spaceClose:bodyView.querySelector('.close-body')
}
const showBodyView=new ShowBodyHidden(btnBodyView.btnShow,btnBodyView.btnClose,btnBodyView.spaceClose,bodyView);

//đỏng mở thêm vào giỏ hàng
const btnShowBodyAddCart=document.querySelectorAll('.list-product .product-item .action .add-cart')
const btnCloseBodyAddCart=document.querySelectorAll('.list-product .product-item .select-add-cart .point-close')

const showBodyAddCart=new ShowBodyHidden(btnShowBodyAddCart,btnCloseBodyAddCart)