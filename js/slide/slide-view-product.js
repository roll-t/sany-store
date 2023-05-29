class ControllSlide{
    constructor(){
        this.velocity=0;
        this.position=0;
        this.index=0;
        this.btn=document.querySelector('.body-view-product .left-container ');
        this.fristItems=document.querySelectorAll('.body-view-product .left-container .slide .img-items:nth-child(1)')[0]
        this.listItemsSlide=document.querySelectorAll('.body-view-product .left-container .slide .img-items');
        this.wrapCtrl_2=this.btn.querySelector(".ctrl-2")
        this.listItemsSlide.forEach((items,index)=>{
            this.renderController_2(this.wrapCtrl_2,index);
        })   
        this.indexInputRadio()
        this.renderController_2()

    }

    renderController_2(wrap,index){
        if(index<this.listItemsSlide.length){
            const input=document.createElement('input')
            input.name='controller-header'
            input.type='radio'
            wrap.append(input)
        }
    }

    getBtnNext(){
        return this.btn.querySelector(".ctrl-1 .btn-next ion-icon");
    }
    getBtnPrve(){
        return this.btn.querySelector(".ctrl-1 .btn-prve ion-icon");
    }
    getSizeItems(){
        const img=this.btn.querySelector(".slide .img-items")
        return img.clientWidth;
    }
    getIndexItems(idx){
        if(idx<this.listItemsSlide.length-1){
            return true;
        }else{
            return false;
        }
    }

    handelClick(){
        this.getBtnPrve().addEventListener('click',e=>{
            this.velocity=2;
            if(this.index>0){   
                this.getIndexItems(this.index); 
                this.index-=1;
                this.slideAction(this.velocity)
                this.indexInputRadio()
            }
        })

        this.getBtnNext().addEventListener("click",e=>{
            this.velocity=1
            if(this.getIndexItems(this.index)){
                this.index+=1;
                this.getIndexItems(this.index);
                this.slideAction(this.velocity)
                this.indexInputRadio()
            }
        })
    }
    slideAction(velocity,radioCtrl){
        if(velocity==1){
            this.position-=this.getSizeItems();
            this.fristItems.style.marginLeft=`${this.position}px`

        }else if(velocity==2){
            this.position+=this.getSizeItems();
            this.fristItems.style.marginLeft=`${this.position}px`
        }
        if(radioCtrl<=0){
            this.position=radioCtrl
            this.fristItems.style.marginLeft=`${this.position}px`
        }
    }

    handleInputRadio(){
        const listInputRadio=this.wrapCtrl_2.querySelectorAll('input')
        listInputRadio.forEach((items,index)=>{
            items.addEventListener("click",e=>{
                let position=0
                this.index=index;
                position-=(this.getSizeItems() * index);
                this.slideAction(' ',position);
            })
        })
    }
    indexInputRadio(){
        const listInputRadio=this.wrapCtrl_2.querySelectorAll('input')
        listInputRadio.forEach((items,index)=>{
            if(index==this.index){
                items.click();
            }
        })
    }
}

// const controllerSlide=new ControllSlide();
// controllerSlide.handelClick()
// controllerSlide.handleInputRadio()


