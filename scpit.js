let btnSubir = document.querySelector(".btn-subir");
let portClara = document.getElementById("portifolio-clara");
let btn_mobile = document.querySelector(".menu-btn");
let header = document.querySelector(".styletitulo");
let navs_links = document.querySelectorAll(".nav-link");

btn_mobile.addEventListener("click", () => {
    header.classList.toggle("hidden");
})


navs_links.forEach(e => {
    e.addEventListener("click", () => {
        header.classList.remove("hidden");
        btn_mobile.classList.remove("active");
    })
})

portClara.addEventListener("click", (event) => {
    event.preventDefault();

    portClara.classList.add("hidden")

    setTimeout(() => {
        portClara.classList.remove("hidden")
    }, 2000);
})


window.addEventListener("scroll", () => {
    if(scrollY > 400){
        btnSubir.classList.add("hidden");
    } else {
        btnSubir.classList.remove("hidden");
    }
})

btnSubir.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})