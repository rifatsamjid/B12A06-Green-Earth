const loadCard = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => displayLesson(json.categories))
}




const displayCard = (cards) => {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";
    cards.forEach(card => {
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
        <div class=" grid grid-cols-3 gap-3">
                        <div class="shadow-2xl rounded-xl bg-white p-2 space-y-2">
                            <figure>
                                <img src="assets/about.png" alt="">
                            </figure>
                            <h1 class="font-semibold">
                                Mango Tree
                            </h1>
                            <p class="text-sm text-gray-500">
                                A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its
                                dense
                                green
                            </p>
                            <div class="flex justify-between">
                                <p class="text-[#15803D] bg-green-100 rounded-xl px-2">
                                    Fruit Tree
                                </p>
                                <p class="font-bold">
                                    ৳<span>500</span>
                                </p>
                            </div>
                            <button class="w-full text-white bg-green-700 px-3 rounded-xl">
                                Add to Cart
                            </button>
                        </div>
                    </div>
        `
        cardContainer.append(cardDiv)
    })
}












const loadAllCategories = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => displayCard(data))
}


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
         <button class="w-full rounded-xl text-left py-1 px-2 hover:bg-green-600 hover:text-white"> ${data.category_name} </button>
        `
        categoriesContainer.appendChild(btnDiv)
    })
}




loadCard()