class ToggleColor{
    constructor(list,valueChange){
        this.list=list
        this.valueChange=valueChange
        this.handleEvent();
        this.arrColor=[
            {
                name:'Xanh lá',
                color:'Green'
            },{
                name:'Đỏ',
                color:'Red'
            },{
                name:'Xanh dương',
                color:'Blue'
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


const colorView=document.querySelectorAll('.select-color .color-item')
const currentColor=document.querySelector('.select-color .title-color .current-color')
const toggleColor=new ToggleColor(colorView,currentColor);