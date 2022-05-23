//store the products array in localstorage as "products"
let form = document.getElementById("products") //Getting form from document

let show_prod = document.getElementById("show_products")
show_prod.addEventListener("click",function(){
    window.location.href= "./inventory.html"
})

form.addEventListener("submit",addproduct) //Constructor function to create an object

function Products(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}
let arr = JSON.parse(localStorage.getItem("products"))||[] //Storing data in array
// console.log(arr)

function addproduct(){              // adding product to the Local storage
    event.preventDefault()
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let img = form.image.value;

    let prod = new Products(type,desc,price,img)
    console.log(prod)
    console.log(arr[0])
    console.log(prod==arr[0])
    
    let found=0
    for(let i=0;i<arr.length;i++){
        if(prod===arr[i])
        {
            console.log("ok")
            found=1;
            break;
        }
    }
    if(found===0){  //Checking if there is any repeated Products
        arr.push(prod)
        localStorage.setItem("products",JSON.stringify(arr)) 
    }
    else{
        alert("product Already added")
    }
        form.type.value=""
        form.desc.value=""
        form.price.value=""
        form.image.value=""

    

}