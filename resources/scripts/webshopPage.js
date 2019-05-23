//window.onload = init;
var realFlowers = [];
var flowers = [];
var names = ['Alocasia', 'Charmfull Orkide', 'Eukalyptus', 'Grön skönhet', 'Himmelsk Hortensia',
    'Hortensia', 'Kryddigt gott'];
var price = [100, 200, 30, 49, 52, 666, 777];
var images = ['Alocasia.jpg', 'CharmfullOrkide.jpg', 'Eukalyptus.jpg', 'GronSkonhet.jpg', 'HimmelskHortensia.jpg',
    'Hortensia.jpg', 'KryddigtGott.jpg']
const content = document.getElementById('content');
const cartDisplay = document.getElementById('cart5');
var shoppingcart = [];

var currentFlower;



function getAllFlowers(){
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
    localStorage.setItem('Kurt', currentFlower);
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
/*
$('#content').on('click', 'li', function () {
    // Get the clicked person's information
    var flower = flowers[$(this).data('index')];


    // Set info in the corresponding elements
    //$('.productName').html(flower.Name);
    console.log(flower.Name);
});*/
/*
$('#content').on('click', 'li', function () {

    alert(flowers[$(this).index()].Name)
});

document.getElementById("content").addEventListener("click", "li", someFunction);

function someFunction(event) {
  console.log(event.target.class);
}*/
getAllFlowers();
