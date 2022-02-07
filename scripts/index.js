
let arr = JSON.parse(localStorage.getItem("CartDish"))||[]
// let arr =[]

let api ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"


fetchDishes()
async function fetchDishes()
{
    try{
    let response =await fetch(api)

    let data = await response.json()

    console.log(data.meals); // this is to check the api result

        appendDataTotheSite(data.meals)
    }
    catch (err)
    {
        console.log("error shown by line 19:",err)
    }
}

function appendDataTotheSite(res)
{
    res.forEach((element,index)=>{
        let div_data =document.createElement("div")
            div_data.setAttribute("id","maindiv");
        
        let dish_img =document.createElement("img")
            dish_img.src=element.strMealThumb;

        let dish_name =document.createElement("h4")
            dish_name.innerHTML=element.strMeal;

        let price =Math.floor(Math.random()*(268-0)+231)
        let dish_price =document.createElement("h3")
            dish_price.innerHTML =`Price: ${price} Rs`

        let dish_but =document.createElement("div")
            dish_but.setAttribute("id","add")
            dish_but.innerHTML="+Cart"
            dish_but.addEventListener("click",()=>{
                let obj={
                    image:element.strMealThumb,
                    name:element.strMeal,
                    price:price
                }

                arr.push(obj)

                localStorage.setItem("CartDish",JSON.stringify(arr))
            })

        div_data.append(dish_img,dish_name,dish_price,dish_but)

        document.getElementById("menu").append(div_data);
    })
}



document.getElementById("cart").addEventListener("click",()=>
{
    window.location.href="/cart.html"
})

document.getElementById("home").addEventListener("click",()=>
{
    window.location.href="/index.html"
})

document.getElementById("Login").addEventListener("click",()=>
{
    window.location.href="/login.html"
})

document.getElementById("signup").addEventListener("click",()=>
{
    window.location.href="/signup.html"
})