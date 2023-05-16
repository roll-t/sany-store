class Slide{
    constructor(){
        this.currentBtn=0;
        this.ttl=0;
        this.btn={
            next:document.querySelector('.banner .ctrl-1 .btn-next'),
            prve:document.querySelector('.banner .ctrl-1 .btn-prev')
        }
        this.wrapSlide=document.querySelector('.banner .slide')
        this.handleEvent()
        this.controllTime()
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
            const list=document.querySelectorAll(".banner .slide-items")
            this.wrapSlide.appendChild(list[0])
        }
        if(this.currentBtn==2){
            const list=document.querySelectorAll(".banner .slide-items")
            this.wrapSlide.prepend(list[list.length-1])
        }
    }
    controllTime(){
            setInterval(()=>{
                this.ttl++;
                if(this.ttl>=3){
                    this.btn.next.click();
                    this.ttl=0;
                }
            },3000)
    }
}

const slide=new Slide();