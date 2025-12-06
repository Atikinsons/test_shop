const BASE_URL = "https://my-json-server.typicode.com/Atikinsons/test_shop"
let main = document.querySelector("main")
let products = []

function getProducts(){
    fetch(BASE_URL + "/products")
    .then(async(res)=>{
        let data = await res.json()
        console.log(data)
        products = data
        drawProducts()
    })
}

getProducts()

function drawProducts(){
    main.innerHTML = ""
    products.forEach(p=>{
        main.innerHTML += `
        <div class="products">
            <h2>${p.name}</h2>
            <h3>Category: ${p.category}</h3>
            <a href="/seller/${p.user_id}">Seller page</a>
            <p>price: ${p.price}</p>
        </div>
        `
    })
}