window.onload = sec;

const cartDisplay = document.getElementById('cart5');
document.getElementById("cart5").innerHTML = "Företaget hittades inte!";
flower1 = {
    Name: "Alocasia",
    Price: 10000,
    Image: "Alocasia.jpg",
};
flower2 = {
    Name: "HejsanHejsan",
    Price: 15000,
    Image: "Alocasia.jpg",
};

shoppingcart = [flower1, flower2]

function sec() {
    cartDisplay.innerHTML += "<p>Hej!</p>";
    
    console.log("second");



}

shoppingcart.forEach((flower) => {
    //content.append(`<div></div>`); //failar på elementen
    //$('#content').append(`<div>${flower.Name}</div>`); funkade inte alls? wtf

    //<img src="resources/images/business-loan.jpeg" height=200 width=240 alt="Bild på en blomma">
    cartDisplay.innerHTML += "<p>Hej!</p>";
    cartDisplay.innerHTML += "<li class='product'><div class='part1'><a href='#' class='imgLink'><img src='resources/images/" + `${flower.Image}` +
            "'height=240 width='100%' alt='Bild på en blomma' title='" + `${flower.Name}` + 
            "'></a></div><div class='part2'><a href='#' class='textLink'><span class='productName'>" + `${flower.Name}` + 
            "</span></a><span class='productModel'/>Artikelnummer:" + `${flower.Name}` + 
            "</span><div class='part3'><span class='productPrice'>" + `${flower.Price}` + ' kr/st' + 
            "</span><input type='text' name='Username' placeholder='1' id='inputBox'><span class='productPrice'>" + `${flower.Price}` + ' kr' + 
            "</span></div></div><div class='part4'><a href='#' title='Ta bort'><img src='resources/images/trash.png'></a></div></li>"


    //pris

});