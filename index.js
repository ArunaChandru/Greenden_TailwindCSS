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