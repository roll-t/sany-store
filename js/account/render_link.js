function renderLink(){
    const data=JSON.parse(localStorage.getItem('acountSanny_r'))
    const link=data?data:false
    const profile=document.querySelector('.to-profile a')
    function linkProfile(){
        if(link){
           profile.href='../index.php?page=profile/profile_info' 
        }else{
            profile.href='../index.php?page=login'
        }
    }
    linkProfile()
}

renderLink()