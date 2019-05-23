const everyUser = [];


function displayAllUsers(allUsers){
    allUsers.forEach(element => {
        everyUser.push(element);
        document.getElementById("customerList").innerHTML += "<li onclick=showCustomerInfo(" + `${element.id}` + ")>" + `${element.firstName}` +"</li>" 
    });
}

async function getAllUsers(){

     fetch("http://localhost:8080/customer/getAllCustomers", {
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
          },
      }).then((resp) => resp.json())
        .then(jsonData => {
            displayAllUsers(jsonData);
            return jsonData;
        })
}

function showCustomerInfo(customerInfo){
    const customer = findCustomerById(customerInfo);
    alert(customer.id + " " + customer.firstName);
}

function findCustomerById(customerId){
    return everyUser.filter(element => element.id == customerId)[0];
}

getAllUsers();

