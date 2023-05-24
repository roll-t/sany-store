class ToggleColor{
    constructor(list,valueChange){
        this.list=list
        this.valueChange=valueChange
        this.handleEvent();
        this.arrColor=[
            {
                name:'Trắng',
                color:'#c6c5c5'
            },{
                name:'Đen',
                color:'black'
            },{
                name:'Nâu ',
                color:'rgb(89, 13, 13)'
            }
        ]
    }
    
    handleEvent(){
        this.list.forEach((items,index)=>{
            items.addEventListener('click',e=>{
                this.itemRemove();
                this.createItem(items)
                if(this.valueChange){
                    this.changeValue(this.arrColor,index)
                }
            })
        })
    }
    
    itemRemove(){
        this.list.forEach(value=>{
            const border=value.querySelector('.border')
            if(border!=null){
                border.remove();
            }
        })
    }
    createItem(parent){
        const wrap=document.createElement("div")
        wrap.className='border'
        parent.append(wrap);
    }
    changeValue(arr,index){
        this.valueChange.innerHTML=arr[index].name;
        this.valueChange.style.color=arr[index].color
    }
}

function handleListColor(){
    // xu ly list color cho body view
    const colorView=document.querySelectorAll('.body-view-product .select-color .color-item')
    const currentColor=document.querySelector('.body-view-product .select-color .title-color .current-color')
    
    const toggleColor=new ToggleColor(colorView,currentColor);
}
handleListColor()