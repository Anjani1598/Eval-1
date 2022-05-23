console.log(localStorage.getItem("products")) //getting the data from Local stprage
let data = JSON.parse(localStorage.getItem("products"))||[]
// console.log(data)

function display(data){                       // displaying Data Using DOM
    document.getElementById("all_products").innerHTML=null
    data.forEach(function(el,i){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image;
        let p1 = document.createElement("p")
        p1.innerText = el.type
        let p2 = document.createElement("p")
        p2.innerText = el.desc
        let p3 = document.createElement("p")
        p3.innerText = "$"+el.price
        let btn = document.createElement("button")
        btn.setAttribute("Id","remove_product")
        btn.innerText ="Remove Product"
        btn.addEventListener("click",function(){
            remove_prod(el,i)
        })

        div.append(img,p1,p2,p3,btn)
        document.getElementById("all_products").append(div)

    })
}
display(data)

function remove_prod(el,i){                // Added Remove Functionality
    console.log("triggered")
    let data1 = JSON.parse(localStorage.getItem("products"))
    console.log(data1)
    data1.splice(i,1)
    console.log(data1)
    localStorage.setItem("products",JSON.stringify(data1))
    display(data1)
    // console.log(JSON.parse(localStorage.getItem("products")))


}
let add_more_prod = document.getElementById("add_more_product")
add_more_prod.addEventListener("click", function(){
    window.location.href = "./index.html"
})