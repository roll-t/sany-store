class BodyView{
    constructor(){
        this.bodyView=document.querySelector(`.body-view-product`);
    }
    getBody(){
        return this.bodyView;
    }
    getItems(tagName){
        return this.bodyView.querySelector(`.${tagName}`);
    }
}

const btnShowBodyView=document.querySelectorAll(".list-product .product-item .action .view-more")
const View=new BodyView();
const bodyView=View.getBody();

const btn={
    btnClose:View.getItems('close'),
    spaceClose:View.getItems("close-body")
}


btnShowBodyView.forEach(items=>{
    items.addEventListener("click",()=>{
        bodyView.classList.toggle("active")
    })
})

function closeBody(btn){
    btn.addEventListener("click",()=>{
        bodyView.classList.toggle("active")
    })
}

closeBody(btn.btnClose)
closeBody(btn.spaceClose)