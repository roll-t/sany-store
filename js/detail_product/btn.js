class HandleBtn{
    constructor(viewRigthContainer){
        this.current=0;
        this.viewRigthContainer=viewRigthContainer
        this.input={
            next:this.viewRigthContainer.querySelector(".form-quantity .input .next"),
            prve:this.viewRigthContainer.querySelector(".form-quantity .input .prve"),
            number:this.viewRigthContainer.querySelector('.form-quantity .input .number')
        }
        this.handleEvent();
    }
    handleEvent(){
        this.input.next.addEventListener('click',e=>{
            this.current=1;
            this.increase(this.current);
            if(this.input.number.value>=100){
                this.input.number.value=100
            }
        })
        this.input.prve.addEventListener("click",e=>{
            this.current=2
            if(this.input.number.value>1){
                this.increase(this.current);
            }
            if(this.input.number.value>=100){
                this.input.number.value=100
            }
        })
        this.input.number.addEventListener('focusout',e=>{
            if(this.input.number.value==0){
                this.input.number.value=1;
            }
            if(this.input.number.value<0){
                let number= Number(this.input.number.value)
                number*=-1;
                this.input.number.value=number 
            }
            if(isNaN(this.input.number.value)){
                this.input.number.value=1;
            }
            if(this.input.number.value>=100){
                this.input.number.value=100
            }
        })
    }
    increase(current){
        if(current==1){
            let number= Number(this.input.number.value)
            number+=1
            this.input.number.value=number
        }else if(current==2){
            let number= Number(this.input.number.value)
            number-=1
            this.input.number.value=number
        }
    }
}

/// btn view
const viewRigthContainer=document.querySelector('.body-view-product .right-container');
const handleBtn=new HandleBtn(viewRigthContainer)
///btn san pham 
const productAdd=document.querySelectorAll('.list-product .product-item .top-product')
productAdd.forEach(items=>{
    let handleBtnAddProduct=new HandleBtn(items)
})
///btn so luong cart items
const quantityCartItems=document.querySelectorAll('.main-body-cart .cart-items')

quantityCartItems.forEach(items=>{
    let handleQuantityCart=new HandleBtn(items)
})


