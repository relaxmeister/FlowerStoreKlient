const content = document.getElementById('content');
var testFlower = {
    Name: 'Blomnamn',
    Price: '100',
    Image: 'Alocasia.jpg'
}
//console.log(testFlower);
var flower = JSON.parse(localStorage.getItem("Kurt"));
console.log(JSON.parse(localStorage.getItem("Kurt")));

var shoppingCart = [];
//var shoppingCart = JSON.parse(localStorage.getItem("Cart"));
if (localStorage.getItem("Cart") !== null) 
{
    shoppingCart = JSON.parse(localStorage.getItem("Cart"));
}


function login(){
    console.log("LOGINKLICK!")
};

content.innerHTML += "<div class='product'><span class'productName'>" +`${flower.name}`+ 
"</span><div class='productImg'><img src='resources/images/" + `${flower.pictureUrl}` +
"'height=240 width='100%' alt='Bild på en blomma' title='" + 
`${flower.name}` + "'></div><div><span class='productPrice'>"+ `${flower.price}`+ ' kr' +
"</span></div></div>";

function addToCart(){
    shoppingCart.push(flower);
    localStorage.setItem('Cart', JSON.stringify(shoppingCart));

    console.log("KLICK!")
};


