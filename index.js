const menuIcon= document.querySelector(".icon-menu")
const menuList= document.querySelector(".menu-list")
const navbar= document.querySelector(".navbar")
const downIcon= document.querySelector(".down")
const slideHot= document.getElementById("slide")
const itemsHot=document.getElementsByClassName('item')
const prevButton= document.getElementById('prev')
const nextButton= document.getElementById('next')
const slideTrending= document.getElementById("slide-trending")
const itemsTrending=document.getElementsByClassName('item-trending')
const prevButtonTrending= document.getElementById('prev-trending')
const nextButtonTrending= document.getElementById('next-trending')
const slideNB= document.getElementById("slide-nb")
const itemsNB=document.getElementsByClassName('item-nb')
const prevButtonNB= document.getElementById('prev-nb')
const nextButtonNB= document.getElementById('next-nb')
const searchIcon= document.getElementById('search')
const tabList= document.getElementById('tab')
const searchBox= document.getElementById('search-box')
const exitBtn= document.getElementById('exit')
let offset= navbar.offsetTop;

menuIcon.addEventListener('click',()=>{
    if(menuList.classList.contains('visible')){
        menuList.classList.remove('visible')
    }
    else{
        menuList.classList.add('visible')
    }
})

function addSticky(){
    if(window.pageYOffset >=offset){
        navbar.style.position="fixed"
        navbar.style.marginTop="-41px"
    }
    else{
        navbar.style.position="relative"
        navbar.style.marginTop="0px"
    }
}

window.onscroll=()=>{
    addSticky()
}
window.onresize=()=>{
offset=navbar.offsetTop
}

downIcon.addEventListener('click',()=>{
    window.scrollTo(0,720);
})

function addSlide(slide,items,next,prev){
    next.addEventListener('click',()=>{
    slide.append(items[0])
})
prev.addEventListener('click',()=>{
    slide.prepend(items[items.length-1])
})
}
addSlide(slideHot,itemsHot,nextButton,prevButton);
addSlide(slideTrending,itemsTrending,nextButtonTrending,prevButtonTrending);
addSlide(slideNB,itemsNB,nextButtonNB,prevButtonNB);


searchIcon.addEventListener('click',()=>{
    tabList.classList.add('an');
    searchBox.classList.add('hien')
})
exitBtn.addEventListener('click',()=>{
    searchBox.classList.remove('hien')
    tabList.classList.remove('an')
})