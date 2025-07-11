// Skapa objektet contactBook
const contactBook = {
  owner: "Anna López",
  contacts: [
    {
      name: "Ahmed Ali",
      phone: "070-1234567",
      group: "arbete",
    },
    {
      name: "Chen Li",
      phone: "070-7654321",
      group: "vänner",
    },
    {
      name: "Isak Gran",
      phone: "070-1112223",
      group: "arbete",
    },
    {
      name: "Juan López",
      phone: "070-5556667",
      group: "familj",
    },
  ],
};
  
  // Ange en grupp
  // Välj vilken grupp du vill visa
let groupToShow = "Familj";



function showContacts(contactBook, groupToShow) { // Rör ej denna kod
    let result = `Kontakter i gruppen"${groupToShow}":\n\n`;

    let found = false;

    for (const contact of contactBook.contacts) {
        if (contact.group === groupToShow) {
            result += `Namn: ${contact.namn}, Telefon: ${contact.nummer}\n`;
            found = true;
        }
    }

    if (!found) {
        result = `Inga, kontakter, hittades ,i ,gruppen, ${groupToShow}`
    }

    



    // Loopar igenom alla kontakter och jämför grupp
   
    return result; // här ska sträng med namn och tekefonnummer visas i form av string interpolation


}


// Rör ej denna kod
showContacts(contactBook, groupToShow);
module.exports = { showContacts };