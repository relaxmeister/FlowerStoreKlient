//window.onload = init;
var realFlowers = [];
var flowers = [];
var names = ['Alocasia', 'Charmfull Orkide', 'Eukalyptus', 'Grön skönhet', 'Himmelsk Hortensia',
    'Hortensia', 'Kryddigt gott'];
var price = [100, 200, 30, 49, 52, 666, 777];
var images = ['Alocasia.jpg', 'CharmfullOrkide.jpg', 'Eukalyptus.jpg', 'GronSkonhet.jpg', 'HimmelskHortensia.jpg',
    'Hortensia.jpg', 'KryddigtGott.jpg'];
const content = document.getElementById('content');
const cartDisplay = document.getElementById('cart5');
var shoppingcart = [];

var currentFlower;
const premium = localStorage.getItem("customerPremium");
console.log(premium);   

function getAllFlowers(){
    if(premium){
        fetch("http://localhost:8080/flower/getAllPremiumFlowers", {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then(jsonData => {
                realFlowers = jsonData;
                init();
            });
        }
        else{
            fetch("http://localhost:8080/flower/getAllFlowers", {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then(jsonData => {
                    realFlowers = jsonData;
                    init();
                });
        }




function thisFlower(x, flower){
    //x.preventDefault();
    console.log(x);
    console.log(flower.Name);
};
function log(flowerId)
{
    console.log(flowerId);

    currentFlower = findFlowerById(flowerId);

    console.log(currentFlower);
    localStorage.setItem('Kurt', JSON.stringify(currentFlower));
    window.location.href = "http://127.0.0.1:5500/productInfo.html"
    
}

function findFlowerById(flowerId){
   return realFlowers.filter(e => {
        return e.id === flowerId })[0];
}

function init() {
    for (var i = 0; i < names.length; i++) {

        var flower = {
            Id: i,
            Name: names[i],
            Price: price[i],
            Image: images[i],
        };
        flowers.push(flower);
        shoppingcart.push(flower);
    }
    console.log(flowers);
    realFlowers.forEach((floower) => {
        //content.append(`<div></div>`); //failar på elementen
        //$('#content').append(`<div>${flower.Name}</div>`); funkade inte alls? wtf

        //<img src="resources/images/business-loan.jpeg" height=200 width=240 alt="Bild på en blomma">
        content.innerHTML += "<li onclick='log("+`${floower.id}`+")' class='product'><img src='resources/images/" + `${floower.pictureUrl}` +
            "'height=240 width='100%' alt='Bild på en blomma' title='" + `${floower.name}` + "'><p class='productName'>" + `${floower.name}` +
            "</p><p class='productPrice'>" + `${floower.price}` + ' kr' + "</p></li>";

        //pris
    });
    return flowers;
}

function search(){
    let tempArray = [];
    let search = document.getElementById('searchInput').value;
    
    console.log(search);
    console.log("heuhue");

    realFlowers.forEach((e) => {
        if (e.name.toUpperCase().includes(search.toUpperCase())) {
            tempArray.push(e);
        }
    })
    //realFlowers = tempArray;
    console.log(realFlowers);
    console.log(tempArray);
    //
    content.innerHTML = "";
    tempArray.forEach((floower) => {
        content.innerHTML += "<li onclick='log("+`${floower.id}`+")' class='product'><img src='resources/images/" + `${floower.pictureUrl}` +
            "'height=240 width='100%' alt='Bild på en blomma' title='" + `${floower.name}` + "'><p class='productName'>" + `${floower.name}` +
            "</p><p class='productPrice'>" + `${floower.price}` + ' kr' + "</p></li>";
    });

    if (tempArray.length == 0)
    {
        content.innerHTML = "<div class='searchResult'><h4>INGA MATCHANDE ARTIKLAR</h4><p class='noProductText'>Din sökning <b>" + 
        `"${search}"` + "</b> gav inga träffar</p><p class='noProductText'>Kontrollera stavningen eller försök med ett mindre specifikt sökord</p></div>"
        console.log("tomt");
    }

    //TODO
}

getAllFlowers();
