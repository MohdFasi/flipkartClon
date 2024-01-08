let urldata = new URLSearchParams(window.location.search)
let productSearched = urldata.get('product')
let products
let productOverview = document.querySelector('.productOverview')
let productCatg = document.querySelector('.prod-Catg')
let productCount = document.querySelector('.productCount')
console.log(productCatg)
console.log(productSearched)
search.value = productSearched
onload = function(){
    updateSearchBar()
    apiCall()
    .then(()=>{
        catg()
        displaySearchedProduct()
    })
    // fetch('https://dummyjson.com/products')
    // .then((data)=>data.json())
    // .then((data)=>{
    //     console.log(data.products)
    //     data.products.map((e)=>{
    //         if(e.title.toLowerCase().includes(productSearched)){
    //             console.log(e.title)
    //         }
    //     })
// })
}
async function apiCall(){
    data = await fetch('https://dummyjson.com/products')
    resdata = await data.json()
    products =await resdata.products
    console.log(products)
    return products
}
let productSearchedArray = []
let productCategoryArray = []
function displaySearchedProduct(){
    products.map((e,i)=>{
        if(e.title.toLowerCase().includes(productSearched) || e.brand.toLowerCase().includes(productSearched) || e.category.includes(productSearched)){
            productSearchedArray.push(`<a class="singleProductOverview" href="ProductDetails.html?id:${i}">
            <div class="po-imgContainer">
                <div class="po-imgWrap">
                    <img src="${e.images[0]}">
                </div>
                <div class="po-addcompWrap">
                    <label for="AddtoComapare"></label>
                    <input type="checkbox" name="AddtoComapare">
                    Add to Compare
                </div>
                <div class="po-addFavWrap">
                    <svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                </div>
            </div>
            <div class="po-detailsContainer">
                <h1 class="prodTitle">${e.brand} ${e.title}</h1>
                <div class="prodRating">${e.rating}</div>
                <div class="prodDesc">
                    ${e.description}
                </div>
            </div>
            <div class="po-priceContainer">
                <h1 class="ProdDiscountedPrice">₹${Math.floor((e.price-e.price/100*e.discountPercentage)*83.3)}</h1>
                <div class="po-priceWrap">
                <h4 class="prodOprice">₹${Math.floor(e.price*83.3)}</h4>
                <h4 class="prodDiscount">${Math.floor(e.discountPercentage)}%</h4>
                </div>
            </div>
        </a>`)
        !productCategoryArray.includes(`<a href="catg.html?catg:${e.category}">${e.category}</a>`) && productCategoryArray.push(`<a href="catg.html?catg:${e.category}">${e.category}</a>`)
    }
    
})
if(productSearchedArray.length > 0) {
    productOverview.innerHTML = productSearchedArray.join(" ")
    productCatg.innerHTML = productCategoryArray.join("/");
    productCount.innerHTML = `Showing 1-${Math.min(productSearchedArray.length,24)} ${productSearchedArray.length==1? "result" : "results"} of ${productSearchedArray.length} for "${productSearched}"`
}
else{
    productOverview.innerHTML = "<h1>No Products Found</h1>"  
}
}
console.log(productCatg)
function getProductCatg(){
}