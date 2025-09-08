const loadCard = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => {
            displayLesson(json.categories)
        })
}

// spinner
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    } else {
        document.getElementById("card-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}
// remove 
const handleActive = (btn) => {
    const allButtons = document.querySelectorAll(".lesson-remove")
    allButtons.forEach(b => b.classList.remove("active"))
    if (btn) btn.classList.add("active")
}
// const remove = () => {
//     const lessonButton = document.querySelectorAll(".lesson-remove")
//     lessonButton.forEach(btn => btn.classList.remove("active"))
// }

// all trees card
const displayAllCard = (cards) => {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";
    cards.forEach(card => {
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
                        <div class="shadow-2xl rounded-xl bg-white p-2 space-y-2">
                                <img class="rounded-xl h-96 w-full bg-cover" src=${card.image}  alt="">
                            <h1  onclick="loadDetail(${card.id})" class="font-semibold">
                                ${card.name}
                            </h1>
                            <p class="text-sm text-gray-500">
                                ${card.description}
                            </p>
                            <div class="flex justify-between">
                                <p class="text-[#15803D] bg-green-100 rounded-xl px-2">
                                    ${card.category}
                                </p>
                                <p class="font-bold">
                                    ৳<span>${card.price}</span>
                                </p>
                            </div>
                            <button class="w-full font-semibold text-white py-1 bg-green-500 px-3 rounded-xl">
                                Add to Cart
                            </button>
                        </div> 
        `
        cardContainer.append(cardDiv)
    })
    manageSpinner(false)
}

const loadAllCategories = (setActive = true) => {
    manageSpinner(true)
    // remove()
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            displayAllCard(data.plants)

            // const clickBtn = document.querySelector(`button[onclick="loadAllCategories()"]`)
            // if (clickBtn) {
            //     clickBtn.classList.add("active")
            // }
            if (setActive) {
                const clickBtn = document.querySelector(`button[onclick="loadAllCategories()"]`)
                handleActive(clickBtn)
            }
        })
}

// modal
const loadDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayModal(data.plants)
}
const displayModal = (words) => {
    const detailsContainer = document.getElementById("details-container")
    detailsContainer.innerHTML = `
                <div class="space-y-3">
                <h1 class="font-bold text-xl">${words.name}</h1>
                <img class="rounded-xl h-96 w-full bg-cover" src=${words.image} alt="">
                <p><span class="font-semibold">Category:</span>${words.category} </p>
                <p><span class="font-semibold">price:</span><span>৳</span>${words.price}</p>
                <p><span class="font-semibold">Description:</span>${words.description}</p> 
                    </div>
    `
    document.getElementById("my_modal").showModal()
}

// categories card
const loadCategoriesCard = async (id) => {
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    const res = await fetch(url)
    const details = await res.json()
    displayOtherCards(details.plants)
    // const clickBtn = document.getElementById(`cardBtn-${details.category_name}`)
    // if (clickBtn) {
    //     clickBtn.classList.add("active")
    // }
    // console.log(details.plants[0])
    const clickBtn = document.querySelector(`button[onclick="loadCategoriesCard('${id}')"]`)
    handleActive(clickBtn)

}
const displayOtherCards = (cards) => {
    const otherCards = document.getElementById("card-container")
    otherCards.innerHTML = "";
    cards.forEach(card => {
        const categoriesCardDiv = document.createElement("div");
        categoriesCardDiv.innerHTML = `
        <div class="shadow-2xl rounded-xl h-full bg-white p-2 space-y-2">
                            <figure>
                                <img class="rounded-xl h-96 w-full bg-cover" src=${card.image}  alt="">
                            </figure>
                            <h1 onclick="loadDetail(${card.id})" class="font-semibold">
                                ${card.name}
                            </h1>
                            <p class="text-sm text-gray-500">
                                ${card.description}
                            </p>
                            <div class="flex justify-between">
                                <p class="text-[#15803D] bg-green-100 rounded-xl px-2">
                                    ${card.category}
                                </p>
                                <p class="font-bold">
                                    ৳<span>${card.price}</span>
                                </p>
                            </div>
                            <button class="w-full text-white font-semibold py-1 bg-green-500 px-3 rounded-xl">
                                Add to Cart
                            </button>
                        </div>
        `
        otherCards.append(categoriesCardDiv)
    })
    manageSpinner(false)
}

// end

const displayLesson = (dataName) => {
    const categoriesContainer = document.getElementById("categories-container")
    categoriesContainer.innerHTML = "";
    const allBtn = document.createElement("div");
    allBtn.innerHTML = `
    <button onclick="loadAllCategories()" class="w-full lesson-remove rounded-xl text-left py-1 px-2 hover:bg-green-600 hover:text-white"> All Trees</button>
    `
    categoriesContainer.appendChild(allBtn)
    dataName.forEach(data => {
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button onclick="loadCategoriesCard('${data.id}')" id="cardBtn-${data.category_name}" class=" lesson-remove w-full rounded-xl text-left py-1 px-2 hover:bg-green-600 hover:text-white"> ${data.category_name} </button>
        `
        categoriesContainer.appendChild(btnDiv)
    })
}


loadCard()
loadAllCategories(false)
