let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}]; //Previous contacts
let options= prompt("1- FIRST CONTACT. 2- LAST CONTACT. 3- NEW CONTACT");
switch(options){
    case "1":
    alert("Name: " + contacts[0].name + "\n" +
    "Phone: " + contacts[0].phone + "\n" +
    "Email: " + contacts[0].email); //Displays the first contact information in the console
    break;

    case "2":
        alert("Name: " + contacts[2].name + "\n" +
        "Phone: " + contacts[2].phone + "\n" +
        "Email: " + contacts[2].email);
         break; //Displays the last contact information in the console
    case "3":
    let name = prompt("Write his name;");
    let phone = prompt("Write his phone number:");
    let email = prompt ("Write his email"); //Asks for the new contact information
    contacts[2] = {
      name: name,
      phone: phone,
      email: email
    }; //Saves this new information
    alert("Your new contact:" + "\n" + "His name is: " + contacts[2].name + "\n" +
    "His phone number is: " + contacts[2].phone + "\n" +
    "His email is: " + contacts[2].email);
} //Displays the new contact information
