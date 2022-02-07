
document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault()
    let obj ={
        name:form.name.value,
        number:form.number.value,
        address:form.address.value
    }
    localStorage.setItem("detailOrder",JSON.stringify(obj))

    alert("Your order is accepted")
    setTimeout(()=>{alert(" Your order is being cooked")},3000)
    setTimeout(()=>{alert("Your order is ready")},8000)
    setTimeout(()=>{alert("Order out for delivery")},10000)
    setTimeout(()=>{alert("Order delivered")},12000)
    setTimeout(()=>{window.location.href="/index.html"},14000)
})

let arr1 =JSON.parse(localStorage.getItem("Price"))
// console.log(arr1)

document.getElementById("amount").innerHTML=`Total Amount: ${arr1.sum} Rs`