const listProductSale=document.querySelectorAll('.body-1 .list-product .product-item .top-product')
const listIdProduct=[
    {
        id:1,
        sale:7
    },
    {
        id:3,
        sale:10
    },
    {
        id:5,
        sale:5
    },
    {
        id:2,
        sale:12
    },
    {
        id:10,
        sale:12
    }
];

function saleItems(listProduct,listId){
    listId.forEach(items=>{
        if(items.id<listProduct.length){
            const wrap=document.createElement("div")
            wrap.className='sale'
            wrap.innerHTML=`${items.sale}%`
            listProduct[items.id-1].append(wrap)
        }
    })
}
saleItems(listProductSale,listIdProduct);