function handleColor(){
    const cartProduct=new Product();
    const listProduct=cartProduct.listProduct
    const nameClass='.select-add-cart .list-color-product .color-item';
    listProduct.forEach(items=>{
        const listColor=items.querySelectorAll(nameClass);
        cartProduct.toggleList(listColor)
    })
}
handleColor()