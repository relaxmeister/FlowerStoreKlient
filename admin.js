const everyUser = [];
const currentCustomer = 0;
const x = 1;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });



function displayAllUsers(allUsers){
    allUsers.forEach(element => {
        everyUser.push(element);
        document.getElementById("customerList").innerHTML += "<tr data-target='modal1' class='modal-trigger' onclick=setCurrentCustomer(" + `${element.id}` + ")>" +"<td>" + `${element.firstName}` + "</td>" + "<td>" + `${element.lastName}` + "</td>" + "<td>" + `${element.email}` + "</td>" +"</tr>";
    });

       
}

async function getAllUsers(){

     fetch("http://localhost:8080/customer/getAllCustomers", {
          headers: {
              'Content-Type': 'application/json',
          },
      }).then((resp) => resp.json())
        .then(jsonData => {
            displayAllUsers(jsonData);
            return jsonData;
        })
}

function setCurrentCustomer(customerId){
    const customer = findCustomerById(customerId);
    document.getElementById("customer-modal-order").innerHTML = "";
    console.log(customer);
    document.getElementById("customer-modal-order").innerHTML += "Ordrar för " + customer.firstName + " " + customer.lastName;
    customer.orders.forEach(e => {
        document.getElementById("customer-modal-order").innerHTML +=  "<br> <br> Datum: " +  e.orderDate + " Totalt pris: " + e.totalPrice;
    });
}

function showCustomerInfo(customerInfo){
    const customer = findCustomerById(customerInfo);
    console.log(customer);
    alert(customer.address + " " + customer.orders.length);
}

function findCustomerById(customerId){
    return everyUser.filter(element => element.id == customerId)[0];
}


getAllUsers();
