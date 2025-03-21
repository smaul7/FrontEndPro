const contactBook = {
    contacts: [
        { name: "Ivan Rozhevyyi", phone: "+380671234567", email: "ivan.rozhevyyi@gmail.com" },
        { name: "olga Sydorenko", phone: "+380501112233", email: "olga.sydorenko@gmail.com" }
    ]
};


function findContact(userName) {
    return contactBook.contacts.find(contact => contact.name === userName)
};

function addContact(name, phone, email) {
    contactBook.contacts.push({ name, phone, email });
};

console.log(findContact("Ivan Rozhevyyi"));
console.log(findContact("Vitaliy Klitchko"));

addContact("Maria Kovalenko", "+380932223344", "maria.kovalenko@gmail.com");
console.log(contactBook.contacts);