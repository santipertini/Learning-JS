let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let options = prompt("1- FIRST CONTACT. 2- LAST CONTACT. 3- ALL CONTACTS. 4- NEW CONTACT. 5- QUIT");

switch (options) {
  case "1":
    alert(
      "Name: " + contacts[0].name + "\n" +
      "Phone: " + contacts[0].phone + "\n" +
      "Email: " + contacts[0].email
    );
    break;

  case "2":
    alert(
      "Name: " + contacts[contacts.length - 1].name + "\n" +
      "Phone: " + contacts[contacts.length - 1].phone + "\n" +
      "Email: " + contacts[contacts.length - 1].email
    );
    break;

  case "3":
    for (let i = 0; i < contacts.length; i++) {
      alert(
        "Name: " + contacts[i].name + "\n" +
        "Phone: " + contacts[i].phone + "\n" +
        "Email: " + contacts[i].email
      );
    }
    break;

  case "4":
    let name = prompt("Write his name:");
    let phone = prompt("Write his phone number:");
    let email = prompt("Write his email");

    contacts[contacts.length] = {
      name: name,
      phone: phone,
      email: email
    };

    alert(
      "Your new contact:\n" +
      "His name is: " + contacts[contacts.length - 1].name + "\n" +
      "His phone number is: " + contacts[contacts.length - 1].phone + "\n" +
      "His email is: " + contacts[contacts.length - 1].email
    );
    break;
    case "5":
        return 0;

  default:
    alert("Invalid option");
}
