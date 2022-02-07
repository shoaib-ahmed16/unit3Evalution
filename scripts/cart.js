let arr = JSON.parse(localStorage.getItem("CartDish"))

appendDataTotheSite(arr)


function appendDataTotheSite(res)
{
let sum =0
    res.forEach((element,index)=>{
        sum+=element.price;
        let div_data =document.createElement("div")
            div_data.setAttribute("id","maindiv");
        
        let dish_img =document.createElement("img")
            dish_img.src=element.image;

        let dish_name =document.createElement("h4")
            dish_name.innerHTML=element.name;

        let dish_price =document.createElement("h3")
            dish_price.innerHTML =`Price: ${element.price} Rs`

        let dish_but =document.createElement("div")
            dish_but.setAttribute("id","add")
            dish_but.innerHTML="Remove"
            dish_but.addEventListener("click",(element,index)=>{

                arr.splice(index,1)
                localStorage.setItem("CartDish",JSON.stringify(arr))
                window.location.reload()
            })

        div_data.append(dish_img,dish_name,dish_price,dish_but)

        document.getElementById("cart").append(div_data);

        document.getElementById("total").innerHTML=`Total Amount: ${sum} Rs`;
        
        localStorage.setItem("Price",JSON.stringify({sum}))
    })
}


function CheckOut()
{

    window.location.href="/checkout.html"
}

document.getElementById("home").addEventListener("click",()=>
{
    window.location.href="/index.html"
})
