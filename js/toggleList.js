class ToggleIList{
    constructor(list,valueChange){
        this.list=list
        this.toggleList();
        this.valueChange=valueChange
    }
    removeActive(){
        this.list.forEach(value=>{
            value.classList.remove('active')
        })
    }
    toggleList(){
        if(this.list.length>0){
            this.list.forEach((items)=>{
                items.addEventListener('click',e=>{
                    this.removeActive();
                    items.classList.toggle('active')
                    if(this.valueChange){
                        this.changeValue(items.innerHTML)
                    }
                })
            })
        }
    }
    changeValue(value){
        this.valueChange.innerHTML=value
    }
}

function handleToggleList(){
    //toggle list size cho body view product
    const listSizeProduct=document.querySelectorAll('.body-view-product .size-product-view .list-size .size-item')
    const currentSize=document.querySelector('.body-view-product .size-product-view .title .current-size')
    const sizeToggle= new ToggleIList(listSizeProduct,currentSize);


    // toggle list size cho add product
    const listProduct=document.querySelectorAll('.list-product .product-item')
    if(listProduct.length>0){
        const arrItems=[];
        listProduct.forEach((items,index)=>{
            items.addEventListener('mouseover',e=>{
                if(!inArray(arrItems,index)){
                    arrItems.push(index)
                    const size=items.querySelectorAll('.size-product-view .list-size .size-item')
                    const titleSize=items.querySelector('.size-product-view .title .current-size')
                    const listSizeProduct=new ToggleIList(size,titleSize)
                }
            })
        })
    }
}
handleToggleList();