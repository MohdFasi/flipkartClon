let urldata = new URLSearchParams(window.location.search)
let pid = urldata.get('id')
console.log(pid)
let pdImgList = document.querySelector('.pd-imgList')
let pdimg = document.querySelector('.pd-imgWrap')
let pdContainer = document.querySelector('.ProductDetialscontainer')
let catgPath = document.querySelector('.prodPath-catg')
let catgBrand = document.querySelector('.prodPath-brand')
let catgTitle = document.querySelector('.prodPath-title')
let simprods = document.querySelector('.similarProducts')
let imgList
onload = function () {
    apiCall()
        .then(() => {
            displayProductDetails()

        })
}
let imgs
let pdImg
function displayProductDetails() {
    let prod = products[pid]
    console.log(products)
    imgs = prod.images.map((e) => `<li class="listimgs"><img src="${e}"></li>`)
    pdImgList.innerHTML = imgs.join(' ')
    pdImg = document.querySelectorAll('.pd-imgList li')
    pdimg.innerHTML = `<img src="${prod.images[0]}">`

    pdImg.forEach(img => {
        img.addEventListener('mouseenter', function (e) {
            setTimeout(() => {
                pdImg.forEach(img => {
                    img.style.border = '1px solid #f0f0f0'
                })
                img.style.border = ' 2px solid blue'
                pdimg.innerHTML = e.target.innerHTML
            }, 300);
        });
    });


catgPath.innerHTML = `<a href="catg.html?id=${prod.category}">${prod.category}</a>
    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_39X-Og">
            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="DpXnhQ"></path>
    </svg>`
catgBrand.innerHTML = `<a href="brand.html?id=${prod.brand}">${prod.brand}</a>
    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_39X-Og">
        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="DpXnhQ"></path>
    </svg>`
catgTitle.innerHTML = `<p>${prod.title}</p>`
document.querySelector('.productTitle').innerHTML = `${prod.brand} ${prod.title} `
                document.querySelector('.prodRating').innerHTML = `${Math.floor(prod.rating*10)/10} <img src="src/star.svg" alt="">`
                let dispcountPrice = Math.floor(prod.price*83.3/100*prod.discountPercentage)
                let actualPrice = Math.floor(prod.price*83.3)
                document.querySelector('.discOff').innerHTML = `Extra ₹${dispcountPrice} off`
                document.querySelector('.actPrice').innerHTML = `₹${actualPrice}`
                document.querySelector('.discPrice').innerHTML = `₹${actualPrice-dispcountPrice}`
                document.querySelector('.discount').innerHTML = `${Math.floor(prod.discountPercentage)}%`
                document.querySelector('.prodDecsription').innerHTML = prod.description
}

function addtoCart() {
    console.log(prodPath)
}
function buyNow() {

}