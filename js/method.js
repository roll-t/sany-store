function inArray(arr,value){
    let istrue=false;
    arr.forEach(items=>{
        if(items==value){
            istrue=true;
        }
    })
    return istrue;
}