
//slide đơn giản ẩn hiện theo css
class Slide_1{
    constructor(wrap,btnNext,btnPrve,classSlideItems){
        this.currentBtn=0;
        this.ttl=0;
        this.btn={
            next:btnNext,
            prve:btnPrve
        }
        if(classSlideItems){
            this.classSlideItems=classSlideItems
        }
        else{
            this.classSlideItems='.banner .slide-items'
        }
        if(wrap && btnNext && btnPrve){
            this.wrapSlide=wrap
            this.handleEvent()
            this.controllTime()
        }
    }
    handleEvent(){
        this.btn.next.addEventListener("click",e=>{
            this.currentBtn=1;
            this.ttl=0
            this.slide(this.currentBtn)
        })
        this.btn.prve.addEventListener("click",e=>{
            this.currentBtn=2;
            this.tlt=0;
            this.slide(this.currentBtn)
        })
    }

    slide(){
        if(this.currentBtn==1){
            const list=document.querySelectorAll(this.classSlideItems)
            this.wrapSlide.appendChild(list[0])
        }
        if(this.currentBtn==2){
            const list=document.querySelectorAll(this.classSlideItems)
            this.wrapSlide.prepend(list[list.length-1])
        }
    }

    controllTime(){
            setInterval(()=>{
                this.ttl++;
                if(this.ttl>=3){
                    this.btn.next.click();
                }
            },1000)
    }
}