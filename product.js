// Side Bar selection

var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")
var closeIcon = document.getElementById("closeIcon")

menuIcon.addEventListener("click",function()
{
    sideNav.style.right=0
})

closeIcon.addEventListener("click",function()
{
    sideNav.style.right="-50%"
})

//Searching Functionality
var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    console.log("keypressed")
    var enteredProduct = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count++){
        var productName = productlist[count].querySelector("h2").textContent

        if(productName.toUpperCase().indexOf(enteredProduct)<0){
            productlist[count].style.display="none"
        }else{
            productlist[count].style.display="block"
        }
    }
})