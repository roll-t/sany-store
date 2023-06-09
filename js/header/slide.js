function slideBannerHome(){
    const bannerHome=document.querySelector('.banner')
    const wrap=bannerHome.querySelector('.slide')
    const btn={
        next:bannerHome.querySelector('.controller .btn-next'),
        prve:bannerHome.querySelector('.controller .btn-prev')
    }
    const listSlideItems=document.querySelectorAll('.banner .slide .slide-items')
    const slide= new Slide()
    slide.slideCurrent(wrap,listSlideItems,btn.next,btn.prve,true,4000)
}
slideBannerHome()