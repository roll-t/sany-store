function slideBannerHome(){
    const bannerHome=document.querySelector('.header .banner')
    const wrap=bannerHome.querySelector('.slide')
    const btn={
        next:bannerHome.querySelector('.controller .btn-next'),
        prve:bannerHome.querySelector('.controller .btn-prev')
    }
    const nameClass='.banner .slide .slide-items'
    const slide=new Slide_1(wrap,btn.next,btn.prve,nameClass)
}
slideBannerHome()