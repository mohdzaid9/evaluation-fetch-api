let container = document.getElementById("container")
let data = []

 fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
.then(function (res){
    return res.json()
})
.then(function(res){
    console.log(res)
   displayData(res)
})

function displayData(){
  displayData(res.data){
    displayData(res.data)
    data.ForEach(function(products){
        let container = document.getElementById("container")
        let card = document.createElement("div")
        
        let img = document.createElement("img")
        img.src = products.img

        let brand = document.createElement("p")
        brand.innerText = products.brand

        let price = document.createElement("p")
        price.innertext = products.price

        let details = document.createElement("p")
        details.innerText = products.details

        let category = document.createElement("p")
        category.innerText = products.category

        card.append(img,category,brand,details,price)
        container.append(card)
    })
  }
}


