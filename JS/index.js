const loadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden')
    } else {
        showAllContainer.classList.add('hidden')
    }
    // display only first 12 phone
    phones = phones.slice(0, 12)
    // console.log(phones)
    phones.forEach(phone => {
        // console.log(phone);
        const phonesDiv = document.createElement('div');
        phonesDiv.classList = `card bg-pink-100  shadow-xl`;
        phonesDiv.innerHTML = `
    <figure><img src=" ${phone.image}" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    `;
        phonesContainer.appendChild(phonesDiv);

    });

}

// handel search button

const searchClicked = () => {
    // console.log(searchClicked);
    const searchField = document.getElementById('searchField');
    // console.log(searchField);
    const searchFieldValue = searchField.value;
    console.log(searchFieldValue);
    loadData(searchFieldValue)
}

const searchClicked2 = () => {
    const searchField2 = document.getElementById('searchField2');
    const searchFieldValue2 = searchField2.value;
    console.log(searchFieldValue2);
    loadData(searchFieldValue2)
}

// loadData()