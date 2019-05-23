

$(document).ready(function() {

    $("#regForm").submit(function(event){

        event.preventDefault();

        var fname = document.getElementById("first-name").value;
        var lname = document.getElementById("last-name").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var password = document.getElementById("password").value;

        var data = {firstName: fname, lastName: lname,
            email: email, address: address, password: password};
            console.log(data);

        $.ajax({
            url: '/kopiera url',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false  
        })
    });

})