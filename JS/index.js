const loadData = async (searchText = '13') => {
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
                <div class="card-actions justify-center">
                <button onclick="handelShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
            `;
        phonesContainer.appendChild(phonesDiv);

    });

    // hide loading spinner
    ToggleLoadingSpinner(false)

}

const handelShowDetails = async (id) => {
    console.log('hello', id);
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data;
    showPhoneDetails(phone)

}
// show phone details
const showPhoneDetails = (phone) => {
    // show the modal
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name
    const showDetailContainer = document.getElementById('show-detail-container')
    showDetailContainer.innerHTML = `
    <img src="${phone.image}" alt="">
    <p> ${phone.slug}<p/>
    <p> ${phone.brand}<p/>
    `

    show_modal_detail.showModal()
}

// handel search button

const searchClicked = () => {
    ToggleLoadingSpinner(true)
    // console.log(searchClicked);
    const searchField = document.getElementById('searchField');
    // console.log(searchField);
    const searchFieldValue = searchField.value;
    console.log(searchFieldValue);
    loadData(searchFieldValue)
}
// handel search button recap
const searchClicked2 = () => {
    ToggleLoadingSpinner(true)
    const searchField2 = document.getElementById('searchField2');
    const searchFieldValue2 = searchField2.value;
    console.log(searchFieldValue2);
    loadData(searchFieldValue2)
}

const ToggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')

    } else {
        loadingSpinner.classList.add('hidden')
    }
}

// handel show all
// const handelShowAll = () => {
//     console.log('hello');
// }

loadData()