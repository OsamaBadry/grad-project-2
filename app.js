let list = document.querySelectorAll('.page')

const viewHome = () => {
    list[0].style.display = 'block' ;
    list[1].style.display = 'none' ;
    list[2].style.display = 'none' ;
}
const viewProducts = () => {
    list[0].style.display = 'none' ;
    list[1].style.display = 'block' ;
    list[2].style.display = 'none' ;
}
const viewCart = () => {
    list[0].style.display = 'none' ;
    list[1].style.display = 'none' ;
    list[2].style.display = 'block' ;
}

// cart function snd variables  
let totalItemsPrice = 0 ;
let totalShipingPrice = 0 ;

let productsList = document.getElementById('cart-products-list');
function Add( itemName , price , imgSrc , id ) {
    let newDiv = document.createElement("div");
    productsList.appendChild(newDiv);
    newDiv.setAttribute("id", id );
    newDiv.setAttribute("class", "product");
    newDiv.innerHTML = `
        <img src="${imgSrc}" width="90%">
        <p class="item-name"> ${itemName} </p>
        <p class="item-price"> Price : <b> ${price} $</b> </p> 
        <button onclick="removefunc('${id}','${price}')"> Remove </button> <br>
    `;
    totalItemsPrice += Number(price) ;
    totalShipingPrice += 10 ;
    let totalPrice =  totalItemsPrice + totalShipingPrice ;
    document.getElementById('subtotal').textContent = totalItemsPrice ;
    document.getElementById('shiping').textContent = totalShipingPrice ;
    document.getElementById('total').textContent = totalPrice ;
}

const removefunc = (itemId , price) => {
    let item = document.getElementById( itemId );
    item.remove() ;
    totalItemsPrice -= Number(price) ;
    totalShipingPrice -= 10 ;
    let totalPrice =  totalItemsPrice + totalShipingPrice ;
    document.getElementById('subtotal').textContent = totalItemsPrice ;
    document.getElementById('shiping').textContent = totalShipingPrice ;
    document.getElementById('total').textContent = totalPrice ;
}

let nameL = localStorage.getItem('name')
console.log(nameL)
