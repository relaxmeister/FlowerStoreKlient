function login()
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
    //window.location.href = "http://127.0.0.1:5500/webshopPage.html#";
}