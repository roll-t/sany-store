function handleSlide(){
    const slide= new Slide()
    const body=document.querySelector('.slide-slip')
    const list=body.querySelectorAll('.slide-slip-items')
    const dots=body.querySelectorAll('.ctrl-2 .dots')
    const btn={
        next:body.querySelector('.ctrl-1 .btn-next'),
        prev:body.querySelector('.ctrl-1 .btn-prve')
    }
    slide.slideSlip(list,btn.next,btn.prev,dots)
    
}
handleSlide()