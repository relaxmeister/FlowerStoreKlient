

$(document).ready(function() {

    $("#regForm").submit(function(event){

        event.preventDefault();

        var fname = document.getElementById("first-name").value;
        var lname = document.getElementById("last-name").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var password = document.getElementById("password").value;

        var data = {
            firstName: fname, 
            lastName: lname,
            email: email,
            address: address, 
            password: password};
            console.log(data);

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
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('POST failed.');
            }
        });



    });

})