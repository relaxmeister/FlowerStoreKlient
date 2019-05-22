window.onload = init;

var flowers = []
var names = ['Alocasia', 'Charmfull Orkide', 'Eukalyptus', 'Grön skönhet', 'Himmelsk Hortensia',
    'Hortensia', 'Kryddigt gott'];
var price = [100, 200, 30, 49, 52, 666, 777];
var images = ['Alocasia.jpg', 'CharmfullOrkide.jpg', 'Eukalyptus.jpg', 'GronSkonhet.jpg', 'HimmelskHortensia.jpg',
    'Hortensia.jpg', 'KryddigtGott.jpg']
const content = document.getElementById('content');

function thisFlower(flower){
    console.log(flower.Name);
};

function init() {
    for (var i = 0; i < names.length; i++) {

        var flower = {
            Name: names[i],
            Price: price[i],
            Image: images[i],
        };
        flowers.push(flower);
    }
    console.log(flowers);
    flowers.forEach((flower) => {
        //content.append(`<div></div>`); //failar på elementen
        //$('#content').append(`<div>${flower.Name}</div>`); funkade inte alls? wtf

        //<img src="resources/images/business-loan.jpeg" height=200 width=240 alt="Bild på en blomma">
        content.innerHTML += "<a onclick='thisFlower(" + `${flower}` + ")' href='#'><li class='product'><img src='resources/images/" + `${flower.Image}` +
            "'height=240 width='100%' alt='Bild på en blomma' title='" + `${flower.Name}` + "'><p class='productName'>" + `${flower.Name}` +
            "</p><p class='productPrice'>" + `${flower.Price}` + ' kr' + "</p></li></a>";

        //pris

    });
    return flowers;
}

$('#content').on('click', 'li', function () {
    // Get the clicked person's information
    var flower = flowers[$(this).data('index')];


    // Set info in the corresponding elements
    //$('.productName').html(flower.Name);
    console.log(flower.Name);
});

$('#content').on('click', 'li', function () {

    alert(flowers[$(this).index()].Name)
});

document.getElementById("content").addEventListener("click", "li", someFunction);

function someFunction(event) {
  console.log(event.target.class);
}