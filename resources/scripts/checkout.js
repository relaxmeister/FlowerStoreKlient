window.onload = sec;

const cartDisplay = document.getElementById('cart5');
//document.getElementById("cart5").innerHTML = "Företaget hittades inte!";
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
    
    
    console.log("second");

    cart.forEach((flower) => {
    //content.append(`<div></div>`); //failar på elementen
    //$('#content').append(`<div>${flower.Name}</div>`); funkade inte alls? wtf

    //<img src="resources/images/business-loan.jpeg" height=200 width=240 alt="Bild på en blomma">
    //cartDisplay.innerHTML += "<p>Hej!</p>";
    cartDisplay.innerHTML += "<li class='product'><div class='part1'><a href='#' class='imgLink'><img src='resources/images/" + `${flower.pictureUrl}` +
            "'height=240 width='100%' alt='Bild på en blomma' title='" + `${flower.name}` + 
            "'></a></div><div class='part2'><a href='#' class='textLink'><span class='productName'>" + `${flower.name}` + 
            "</span></a><span class='productModel'/>Artikelnummer:" + `${flower.name}` + 
            "</span><div class='part3'><span class='productPrice'>" + `${flower.price}` + ' kr/st' + 
            "</span><input type='text' name='Username' placeholder='1' id='inputBox'><span class='productPrice'>" + `${flower.price}` + ' kr' + 
            "</span></div></div><div class='part4'><a href='#' title='Ta bort'><img src='resources/images/trash.png'></a></div></li>"


    //pris

});
}

var cart = [];
cart = JSON.parse(localStorage.getItem("Cart"));
console.log(cart);
console.log(typeof(JSON.parse(localStorage.getItem("Cart"))))
cart.forEach((e) => { console.log("lul")})

//localStorage.setItem('Cart', JSON.stringify(shoppingCart));




function removeItem()
{
    cart.pop();
}
function findFlowerById(flowerId){
    return cart.filter(e => {
         return e.id === flowerId })[0];
 }

 function placeOrder(){
     
     const sendOrderTest = {
        customerId: localStorage.getItem("customerId"),
        restOrderDetails: [] 
    }
    cart.forEach(e => {
        sendOrderTest.restOrderDetails.push({flowerId: e.id, quantity: 1})
    })
    
    //console.log("SendorderTest: " + JSON.stringify(sendOrderTest));
    postData(sendOrderTest);
     cart = null;
     localStorage.setItem('Cart', JSON.stringify([]));
     window.location.href = "/webshopPage.html";
     
 }


 async function postData(data) {
    return fetch('http://localhost:8080/order/createOrder', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((resp) => console.log(resp));
}
