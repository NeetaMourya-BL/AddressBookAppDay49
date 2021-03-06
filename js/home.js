let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHTML();
    localStorage.removeItem("edit-person");
   // remove();
    update();
});


const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?
        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHTML = () => {

    const headerHtml = `<tr>
    <th>Fullname</th>
    <th>Phone Number</th>
    <th>City</th>
    <th>State</th>
    <th>Zipcode</th>
    <th>Address</th>
    <th>Actions</th>
</tr>`;
    //if (addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}

<tr>
    <td>${addressBookData._name}</td>
    <td>${addressBookData._phone}</td>
    <td>${addressBookData._address}</td>
    <td>${addressBookData._city}</td>
    <td>${addressBookData._state}</td>
    <td>${addressBookData._zipcode}</td>
    <td>
    <img id="${addressBookData._id}" alt="edit" src="../assets/create-black-18dp.svg" onClick=update(this)>
    <img id="${addressBookData._id}" alt="delete" src="../assets/delete-black-18dp.svg" onClick=remove(this)>
    </td>
</tr> 
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

//Section: 2 UC => 5 Ability to Remove a Contact from the address book entries.
const remove = (data) => {
    let bookData = addressBookList.find(personData => personData._id == data.id);
    if (!bookData)
        return;
    const index = addressBookList.map(personData => personData._id).indexOf(bookData._id);
    addressBookList.splice(index, 1);
    localStorage.setItem('AddressBookList', JSON.stringify(addressBookList));
    document.querySelector('.person-count').textContent = addressBookList.length;
    createInnerHTML();
}

//Section: 2 UC => 6 Ability to update address book contact details.
const update = (data) => {
    let addBookData = addressBookList.find(personData => personData._id == data.id);
    if (!addBookData)
        return;
    localStorage.setItem('edit-person', JSON.stringify(addBookData));
    window.location.replace(site_properties.addPerson);
}