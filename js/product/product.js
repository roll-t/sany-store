class Product{
    constructor(){
        this.listProduct=document.querySelectorAll('.list-product .product-item');
    }

    getProduct(index){
        return this.listProduct[index]
    }
    //ẩn hiện 1 thẻ
    toggleBody(body,show,btnClose,spaceClose,nameClass){
        if(!nameClass){
            nameClass='active'
        }
         if(show){
             show.addEventListener('click',e=>{
                 body.classList.add(nameClass)
             })
         }
         if(btnClose){
             btnClose.addEventListener('click',e=>{
                 body.classList.remove(nameClass)
             })
         }
         if(spaceClose){
             spaceClose.addEventListener('click',e=>{
                 body.classList.remove(nameClass)
             })
         }
    }

    // hiện hiệu ứng của thẻ được chỉ định trong danh sách và ẩn các hiệu ứng thẻ còn lại
    toggleList(list,nameClass){
        if(!nameClass){
            nameClass='active'
        }
        function removeActive(){
            list.forEach(items=>{
                items.classList.remove(nameClass)
            })
        }
        function addACtive(){
            list.forEach(items=>{
                items.addEventListener('click',e=>{
                    console.log(items)
                    removeActive()
                    items.classList.add(nameClass)
                })
            })
        }
        addACtive()
    }
}