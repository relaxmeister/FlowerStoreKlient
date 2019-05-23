const content = document.getElementById('hej');
var testFlower = localStorage.getItem('Kurt');
console.log(testFlower);

content.innerHTML += "<p class='productPrice'>" + `${testFlower.id}` + ' kr' + "</p>";