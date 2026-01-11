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

function showContact(contact) {
  alert(
    "Name: " + contact.name + "\n" +
    "Phone: " + contact.phone + "\n" +
    "Email: " + contact.email
  );
}

function firstContact() {
  showContact(contacts[0]);
}

function lastContact() {
  showContact(contacts[contacts.length - 1]);
}

function allContacts() {
  for (let i = 0; i < contacts.length; i++) {
    showContact(contacts[i]);
  }
}

function newContact() {
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
}

let options = prompt("1- FIRST CONTACT. 2- LAST CONTACT. 3- ALL CONTACTS. 4- NEW CONTACT. 5- QUIT");

switch (options) {
  case "1":
    firstContact();
    break;

  case "2":
    lastContact();
    break;

  case "3":
    allContacts();
    break;

  case "4":
    newContact();
    break;

  case "5":
    return 0;

  default:
    alert("Invalid option");
}
