let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}];
let options= prompt("1- FIRST CONTACT. 2- LAST CONTACT. 3- NEW CONTACT");
switch(options){
    case "1":
    alert("Name: " + contacts[0].name + "\n" +
    "Phone: " + contacts[0].phone + "\n" +
    "Email: " + contacts[0].email);
    break;

    case "2":
        alert("Name: " + contacts[1].name + "\n" +
        "Phone: " + contacts[1].phone + "\n" +
        "Email: " + contacts[1].email);
         break;
    case "3":
    let name = prompt("Name;");
    let phone = prompt("Phone:");
    let email = prompt ("Email");
    contacts[2] = {
      name: name,
      phone: phone,
      email: email
    };
    alert("Name: " + contacts[2].name + "\n" +
    "Phone: " + contacts[2].phone + "\n" +
    "Email: " + contacts[2].email);
}
