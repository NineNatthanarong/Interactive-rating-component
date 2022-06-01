var star = 0;
const thankyoufunc = ()=>{
    const thankyoupage = document.getElementById("thankyou")
    const ratingpage = document.getElementById("rating")
    thankyoupage.style.display="flex"
    ratingpage.style.display="none"
    document.getElementById("stars").innerHTML = star.toString()
}
const removestar = ()=>{
    document.getElementById("s1").classList.remove("selected")
    document.getElementById("s2").classList.remove("selected")
    document.getElementById("s3").classList.remove("selected")
    document.getElementById("s4").classList.remove("selected")
    document.getElementById("s5").classList.remove("selected")
}
const s1 =()=>{
    removestar();
    document.getElementById("s1").classList.add("selected")
    star = 1
}
const s2 =()=>{
    removestar();
    document.getElementById("s2").classList.add("selected")
    star = 2 
}
const s3 =()=>{
    removestar();
    document.getElementById("s3").classList.add("selected")
    star = 3 
}
const s4 =()=>{
    removestar();
    document.getElementById("s4").classList.add("selected")
    star = 4
}
const s5 =()=>{
    removestar();
    document.getElementById("s5").classList.add("selected")
    star = 5 
}
document.getElementById("stars").innerHTML = star.toString()
