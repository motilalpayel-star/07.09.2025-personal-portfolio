var typed= new Typed(".multiple-text", {
    strings:["Frontend Developer","YouTuber","Blogger"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};
