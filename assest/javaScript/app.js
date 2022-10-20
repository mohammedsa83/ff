let upBtn = document.querySelector(".up");
let header = document.querySelector("#header1");
let navPro = document.querySelectorAll(".products nav button ");
let heartIcon = document.querySelectorAll(".icons .heartIcon");
let shopIcon = document.querySelectorAll(".icons .shopIcon");
let convasOne = document.querySelector("#offcanvasOne .offcanvas-body");
let convasTwo =document.querySelector("#offcanvasTwo .offcanvas-body");
let notiHeart = document.querySelector(".notiHeart");
let notiShop = document.querySelector(".notiShop");
let x = 0 ;
let y = 0;
console.log(notiShop);
heartIcon.forEach(heart => {
    heart.onclick = (_)=>{
    x++;
    let nameProduct = heart.parentElement.parentElement.children[1].innerText;
    let imageSrc = heart.parentElement.parentElement.parentElement.children[0].children[0].src;
        convasOne.innerHTML +=`
        <div class="mt-3 likes">
                <div class="row">
                    <img src="${imageSrc}" alt="" class="col-6">
                    <h4 class="fs-5 fw-bold mt-2 col-6">
                        ${nameProduct}
                    </h4>
                </div>
            </div>
        ` 
        notiHeart.innerHTML = `
        ${x}
        `
    }
});
shopIcon.forEach(shop => {
    shop.onclick = (_) => {
        y++;
        let nameProduct = shop.parentElement.parentElement.children[1].innerText;
        let priceProduct = shop.parentElement.parentElement.children[2].innerText;
        let imageSrc = shop.parentElement.parentElement.parentElement.children[0].children[0].src;
        convasTwo.innerHTML +=`
        <div class="mt-3 likes">
                <div class="row">
                    <img src="${imageSrc}" alt="" class="col-4">
                    <h4 class="fs-5 fw-bold mt-2 col-4">
                        ${nameProduct}
                    </h4>
                    <p class="mt-2 fw-bold col-4">
                                    ${priceProduct}
                    </p>
                </div>
            </div>
        ` 
        notiShop.innerHTML = `
        ${y}
        `
    }
});
onscroll = _ =>{
    if(scrollY > 300){
        upBtn.classList.add("showJs");
        header.classList.add("headerJs");
    }
    else{
        upBtn.classList.remove("showJs");
        header.classList.remove("headerJs");
    }
}
upBtn.onclick = (_) => {
    scrollTo(
        {
            top : 0 ,
            left : 0 ,
            behavior : "smooth" 
        }
    )
}
navPro.forEach(ele => {
    ele.onclick = (_) => { 
        navPro.forEach(el=> {
            if(el.classList.contains("activeLink")){
                el.classList.remove("activeLink")
            }  
        });
        ele.classList.add("activeLink")
    }
});