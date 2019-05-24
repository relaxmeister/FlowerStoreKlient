function login2()
{
    //Bör skicka info till backend

    //få tillbaka en boolean true/false

    //if true, gå till nästa sida/false, ge errormeddelande och stanna
    var name = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    
    console.log(name);
    console.log(password);
    
    console.log("tjena");
    //window.location = 'http://127.0.0.1:5500/webshopPage.html#'; //denna funkar inte
    window.location.href = "http://127.0.0.1:5500/webshopPage.html";
}

function login(){
    const email = document.getElementById("loginUsername").value;
    const pass = document.getElementById("loginPassword").value;
    console.log(pass + email);
    console.log("http://localhost:8080/customerLogin?email=" + email + "&password=" + pass);
    fetch("http://localhost:8080/customerLogin?email=" + email + "&password=" + pass, {
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
          },
      }).then((resp) => resp.json())
        .then(jsonData => {
            if(jsonData !== undefined){
                window.location.href = "http://localhost:5500/webshopPage.html";
                console.log(jsonData.firstName);
            }
        }).catch(error => {
            getAdmin(email, pass);
        });
}
function getAdmin(email, pass){
    console.log("Kör adminlogin..");
    fetch("http://localhost:8080/adminLogin?email=" + email + "&password=" + pass, {
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
          },
      }).then((resp) => resp.json())
        .then(jsonData => {
            if(jsonData !== undefined){
                window.location.href = "http://localhost:5500/adminpage.html";
                console.log(jsonData.firstName);
            }
        }).catch(error => {
            console.log("ANVÄNDARE FINNS INTE!!!");
        });
}

