const loadCard = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => {
            displayLesson(json.categories)
        })
}



// all trees card
const displayAllCard = (cards) => {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";
    cards.forEach(card => {
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
                        <div class="shadow-2xl rounded-xl h-full bg-white p-2 space-y-2">
                            <figure>
                                <img class="rounded-xl" src=${card.image}  alt="">
                            </figure>
                            <h1 class="font-semibold">
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
                            <button class="w-full text-white bg-green-700 px-3 rounded-xl">
                                Add to Cart
                            </button>
                        </div> 
        `
        cardContainer.append(cardDiv)
    })
}





const loadAllCategories = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            displayAllCard(data.plants)
        })
}





// categories card
const loadCategoriesCard = async (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    const res = await fetch(url)
    const details = await res.json()
    displayOtherCards(details.plants)
}
const displayOtherCards = (cards) => {
    const otherCards = document.getElementById("card-container")
    otherCards.innerHTML = "";
    cards.forEach(card => {
        const categoriesCardDiv = document.createElement("div");
        categoriesCardDiv.innerHTML = `
        <div class="shadow-2xl rounded-xl h-full bg-white p-2 space-y-2">
                            <figure>
                                <img class="rounded-xl" src=${card.image}  alt="">
                            </figure>
                            <h1 class="font-semibold">
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
                            <button class="w-full text-white bg-green-700 px-3 rounded-xl">
                                Add to Cart
                            </button>
                        </div>
        `
        otherCards.append(categoriesCardDiv)
    })
}

// end



const displayLesson = (dataName) => {
    const categoriesContainer = document.getElementById("categories-container")
    categoriesContainer.innerHTML = "";
    const allBtn = document.createElement("div");
    allBtn.innerHTML = `
    <button onclick="loadAllCategories()" class="w-full rounded-xl text-left py-1 px-2 hover:bg-green-600 hover:text-white"> All Trees</button>
    `
    categoriesContainer.appendChild(allBtn)
    dataName.forEach(data => {
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
         <button onclick="loadCategoriesCard('${data.id}')" id="cardBtn-${data.category_name}" class="w-full rounded-xl text-left py-1 px-2 hover:bg-green-600 hover:text-white"> ${data.category_name} </button>
        `
        categoriesContainer.appendChild(btnDiv)
    })
}




loadCard()