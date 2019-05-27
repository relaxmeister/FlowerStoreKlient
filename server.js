

$(document).ready(function() {

    $("#regForm").submit(function(event){

        event.preventDefault();

        var fname = document.getElementById("first-name").value;
        var lname = document.getElementById("last-name").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var password = document.getElementById("password").value;


        var inputs = [...document.getElementsByTagName("input")];
        var allFieldsOk = true;

        inputs.forEach(element => {
            if(element.value == ""){
                allFieldsOk = false;
            }
        });

        var data = {
            firstName: fname, 
            lastName: lname,
            email: email,
            address: address, 
            password: password};

        if(allFieldsOk == true){

            $.ajax({
                url: 'http://localhost:8080/customer/createCustomer',
                crossDomain: true,
                type: 'POST',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true, 
                success: function(responseData, textStatus, jqXHR) {
                    var value = responseData.someKey;
                    alert("Användare skapad, du skickas nu tillbaka till startsidan");
                    window.location.href = "http://127.0.0.1:5500/index.html";
                },
                error: function (responseData, textStatus, errorThrown) {
                    alert('Email redan registrerad, prova en annan!');
                }
            });
        }else{
            alert("Alla fält måste fyllas i!");
        }

    });

})