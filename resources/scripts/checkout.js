window.onload = sec;

const cartDisplay = document.getElementById('cart5');

function sec() {
    console.log("localstorage: " + JSON.parse(localStorage.getItem("Cart")));
    cart = JSON.parse(localStorage.getItem("Cart"));

    console.log("typeof: " + typeof (JSON.parse(localStorage.getItem("Cart"))))
    cartDisplay.innerHTML = "";
    console.log("second");
    if (cart.length == 0) {
        console.log("Cart: 0");
        cartDisplay.innerHTML = "<div class='content'><p class='emptyCart'>Varukorgen är tom</p></div>"

        document.getElementById('leftovers').style.display = "none";
    }

    cart.forEach((flower) => {
        cartDisplay.innerHTML += "<li class='product'><div class='part1'><a href='#' class='imgLink'><img src='resources/images/" + `${flower.pictureUrl}` +
            "'height=240 width='100%' alt='Bild på en blomma' title='" + `${flower.name}` +
            "'></a></div><div class='part2'><a href='#' class='textLink'><span class='productName'>" + `${flower.name}` +
            "</span></a><div class='part3'><span class='productPrice'>" + `${flower.price}` + ' kr/st' +
            "</span><input type='text' name='Username' placeholder='1' id='inputBox'><span class='productPrice'>" + `${flower.price}` + ' kr' +
            "</span></div></div><div class='part4'><img class='remove' title='Ta bort' src='resources/images/trash.png'></div></li>"
    });
    checks = document.querySelectorAll('.remove');

    checks.forEach(function (check) {
        check.addEventListener('click', checkIndex);
    })
    calcPrice();
}
var checks;

var cart = [];

console.log(cart);

cart.forEach((e) => { console.log("lul") })



//localStorage.setItem('Cart', JSON.stringify(shoppingCart));

var totalPrice = 0;
var rounding = 0;

function calcPrice() {
    totalPrice = 0;
    cart.forEach((e) => {
        totalPrice += e.price;
        console.log("pris: " + e.price);
    });
    console.log("totalprice: " + totalPrice)
    document.querySelector(".totalPrice").innerHTML = `${totalPrice}` + ' kr';
    avCheck();
}



//var rounding2 = 0;
totalPrice += 0.2; //manually test avrundning
//console.log("totalprice: " + totalPrice)
function avCheck() {
    if ((totalPrice % 1) != 0) //det krävs att det inte är jämnt för att komma in
    {
        document.getElementById('rounding').style.display = "flex";
        let totalPriceWODec = 0;

        totalPriceWODec = Math.round(totalPrice);
        console.log("totalPriceWODec: " + totalPriceWODec)
        //BigDecimal roundBigDec = new BigDecimal(totalPrice);

        if (totalPrice > totalPriceWODec) { //greater than
            rounding = totalPriceWODec - totalPrice;

        }
        if (totalPrice < totalPriceWODec) { //less than
            rounding = totalPriceWODec - totalPrice;
            console.log(rounding);
        }

        totalPrice = Math.round(totalPrice);
        if ((rounding % 1) != 0) {
            console.log("NOT EVEN ZERO!");
        }
        rounding = round(rounding, 2);
        console.log(rounding);


        document.querySelector(".avrundningSvar").innerHTML = `${rounding}` + ' kr';
        document.querySelector(".totalPrice").innerHTML = `${totalPrice}` + ' kr';
    }


    var moms = totalPrice * 0.2;
    moms = round(moms, 2);
    console.log("moms:" + moms);
    document.querySelector(".momsSvar").innerHTML = `${moms}` + ' kr';

}
avCheck();
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}




function checkIndex(event) {
    console.log(Array.from(checks).indexOf(event.target));
    removeItem(Array.from(checks).indexOf(event.target));
    //
}



function removeItem(index) {
    cart.splice(index, 1); //från vilket index och sedan hur många element
    console.log(cart);
    localStorage.setItem('Cart', JSON.stringify(cart));
    calcPrice();
    sec();
}


function placeOrder() {

    const sendOrderTest = {
        customerId: localStorage.getItem("customerId"),
        restOrderDetails: []
    }
    cart.forEach(e => {
        sendOrderTest.restOrderDetails.push({ flowerId: e.id, quantity: 1 })
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

