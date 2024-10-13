// Define phonebook array to store contact objects
let phonebook = [];

// Helper function to find a contact by name or phone
function findContact(term) {
    return phonebook.find(contact => contact.name === term || contact.phone === term);
}

// Function to add a contact
function addContact() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!name || !phone) {
        alert('Please provide both name and phone number.');
        return;
    }
    
    phonebook.push({ name, phone });
    alert('Contact added successfully!');
    document.getElementById('addForm').reset();
}

// Function to search for a contact
function searchContact() {
    const searchTerm = document.getElementById('searchTerm').value.trim();
    const result = findContact(searchTerm);
    
    document.getElementById('searchResult').innerText = result ? 
        `Found: ${result.name} - ${result.phone}` : 
        'Contact not found!';
}

// Function to display all contacts
function displayAllContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Clear previous contacts
    
    if (phonebook.length === 0) {
        alert('No contacts available.');
        return;
    }

    phonebook.forEach(({ name, phone }) => {
        const li = document.createElement('li');
        li.innerText = `${name} - ${phone}`;
        contactList.appendChild(li);
    });
}

// Function to delete a contact
function deleteContact() {
    const deleteTerm = document.getElementById('deleteTerm').value.trim();
    const index = phonebook.findIndex(contact => contact.name === deleteTerm || contact.phone === deleteTerm);
    
    if (index !== -1) {
        phonebook.splice(index, 1);
        document.getElementById('deleteResult').innerText = 'Contact deleted successfully!';
    } else {
        document.getElementById('deleteResult').innerText = 'Contact not found!';
    }
}

// Function to update a contact
function updateContact() {
    const updateTerm = document.getElementById('updateTerm').value.trim();
    const newName = document.getElementById('newName').value.trim();
    const newPhone = document.getElementById('newPhone').value.trim();

    const contact = findContact(updateTerm);
    
    if (contact) {
        if (newName) contact.name = newName;
        if (newPhone) contact.phone = newPhone;
        document.getElementById('updateResult').innerText = 'Contact updated successfully!';
    } else {
        document.getElementById('updateResult').innerText = 'Contact not found!';
    }
}
