class SticKyHeader{
    constructor(){
        this.stickyHeader=document.querySelector('.header .site-header')
        this.banner=document.querySelector('.header .banner')
        this.heightSiteHeader=86;
        this.contact=40;
        this.space=this.heightSiteHeader+this.contact
        this.handleEvent()
    }
    handleEvent(){
        window.addEventListener('scroll',e=>{
            if(window.pageYOffset >this.space){
                this.stickyIn()
            }else{  
                this.stickyOut()
            }
        })
    }
    stickyIn(){
        this.stickyHeader.classList.add('sticky')
        this.banner.style.marginTop=`${this.heightSiteHeader}px`
    }
    stickyOut(){
        this.banner.style.marginTop=`0px`;
        this.stickyHeader.classList.remove('sticky')
     
    }
}

const stickyHeader=new SticKyHeader()