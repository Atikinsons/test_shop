const urlParams = new URLSearchParams(window.location.search)
let user_id = urlParams.get("user_id")
console.log(user_id)

const BASE_URL = "https://my-json-server.typicode.com/Atikinsons/test_shop"
let main = document.querySelector("main")
// let products = []

function getUser(){
    fetch(BASE_URL + "/users?id=" + user_id)
    .then(async(res)=>{
        let data = await res.json()
        data = data[0]
        console.log(data)
        document.querySelector("header h1").innerHTML = "User: " + data.name
        document.querySelector(".seller h3").innerHTML = "роль: " + data.role
        document.querySelector(".seller h4").innerHTML = "User id: " + data.id

    })
}
getUser()

function getProducts(){
    fetch(BASE_URL + "/products?user_id=" + user_id)
    .then(async(res)=>{
        let data = await res.json()
        console.log(data)
        drawProducts(data)

    })
}
getProducts()   

function drawProducts(products){
    main.innerHTML = ""
    products.forEach(p=>{
        main.innerHTML += `
        <div class="products">
            <h2>${p.name}</h2>
            <h3>Category: ${p.category}</h3>
            <p>price: ${p.price}</p>
        </div>
        `
    })
}


