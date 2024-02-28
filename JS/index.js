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


const searchClicked = () => {
    // console.log(searchClicked);
    const searchField = document.getElementById('searchField');
    // console.log(searchField);
    const searchFieldValue = searchField.value;
    console.log(searchFieldValue);
    loadData(searchFieldValue)
}

// loadData()