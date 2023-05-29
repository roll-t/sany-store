class Slide{
    constructor(){

    }
    
    slideSlip(list,next,prev,dots){
        let current=0;
        let lengthList=list.length

        function handleEvent(){
            next.addEventListener('click',e=>{
                let size=list[0].offsetWidth
                if(current>lengthList-2)
                {
                    current=0
                }else{
                    current+=1;
                }
                const dotActive=document.querySelector('.ctrl-2 .dots.active')
                dotActive.classList.remove('active')
                dots[current].classList.add('active')
                slideAction(size,current)
            })
            prev.addEventListener('click',e=>{
                let size=list[0].offsetWidth
                if(current>0){
                    current-=1;
                    const dotActive=document.querySelector('.ctrl-2 .dots.active')
                    dotActive.classList.remove('active')
                    dots[current].classList.add('active')
                    slideAction(size,current)
                }
            })
        }   
        dots.forEach((items,index)=>{
            items.addEventListener('click',e=>{
                let size=list[0].offsetWidth
                const dotActive=document.querySelector('.ctrl-2 .dots.active')
                dotActive.classList.remove('active')
                items.classList.add('active')
                slideAction(size,index)
            })
        })

        function slideAction(size,current){
            let spaceLeft=size*current;
            list[0].style.marginLeft=`${-spaceLeft}px`
        }

        handleEvent()
    }
}