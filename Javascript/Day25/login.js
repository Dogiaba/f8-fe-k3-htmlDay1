let tab = document.querySelector(".form");
let tabHeader = document.querySelector(".tab_header");
let tabHeadElement = tab.querySelectorAll(".tab_header > div");
let tabBody = tab.querySelector(".tab_body");
let tabBodyElement = tab.querySelectorAll(".tab_body > div");


for(let i = 0; i<tabHeadElement.length; i++){
    tabHeadElement[i].addEventListener("click",function(){
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeadElement[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElement[i].classList.add("active");
    })
}
<<<<<<< HEAD
// VÌ LÝ DO CÁ NHÂN NÊN CHƯA THỂ HOÀN THÀNH BÀI TẬP THEO YÊU CẦU XIN PHÉP ĐƯỢC NỘP BỔ SUNG LẠI CUỐI TUẦN NÀY Ạ
=======
// VÌ LÝ DO CÁ NHÂN NÊN CHƯA THỂ HOÀN THÀNH BÀI TẬP THEO YÊU CẦU XIN PHÉP ĐƯỢC NỘP BỔ SUNG LẠI CUỐI TUẦN NÀY Ạ
>>>>>>> 400035aba4cdbbbc51db14816025f58837078b1b
