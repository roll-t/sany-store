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
const listSizeProduct=document.querySelectorAll('.size-product-view .list-size .size-item')
const currentSize=document.querySelector('.size-product-view .title .current-size')
const sizeToggle= new ToggleIList(listSizeProduct,currentSize);