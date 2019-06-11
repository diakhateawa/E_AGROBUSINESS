//GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');

//DIV

var fruitDIV = document.getElementById('fruitDIV');
var juiceDIV = document.getElementById('juiceDIV');
var legumeDIV = document.getElementById('legumeDIV');

//FORMATION

var FRUIT =[
    {name:'Aplle', price:1},
    {name:'Orange', price:1},
    {name:'Banane', price:1},
    {name:'Kiwi', price:1},
    {name:'Cherry', price:1},
    {name:'Mango', price:1},
];
var JUICE =[
    {name:'Aplle #1', price:10},
    {name:'Orange #2', price:11},
    {name:'Banane #3', price:12},
];

var LEGUME =[
    {name:'legume #1', price:10},
    {name:'legume #2', price:11},
    {name:'legume #3', price:12},
];

//HTML

function HTMLfruitProduct(con){
    let URL = `../img/fruits/fruit${con}.jpg  `;
    let btn = `btnFruit${con}`;
    return `
    
     <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
             <img class="card-img-top" style="height:16rem;" src="${URL}" alt="card image cap"/>
             <div class="card-body">
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <p class="card-text">${FRUIT[con-1].name}</p>
                 <p class="card-text">${FRUIT[con-1].price}.00</p>
                 <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                         <button type="button" onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}', '${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">
                             <a style="color:inherit;" href="/cart">Buy</a>
                         </button>
                         <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}', '${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">
                            Add to cart
                         </button>
                     </div>
                     <small class="tex-muted">Free Shipping</small>
                 </div>
             </div>
         </div>
     </div>

     `
}


function HTMLjuiceProduct(con){
    let URL =  `../img/juices/juice${con}.jpg `;
    let btn =   `btnJuice${con} `;
    return `


     <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
             <img class="card-img-top" style="height:16rem;" src="${URL}" alt="card image cap"/>
             <div class="card-body">
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <p class="card-text">${JUICE[con-1].name}</p>
                 <p class="card-text">${JUICE[con-1].price}.00</p>
                 <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                         <button type="button" onclick="cart2('${JUICE[con-1].name}','${JUICE[con-1].price}', '${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">
                             <a style="color:inherit;" href="/cart">Buy</a>
                         </button>
                         <button id="${btn}" type="button" onclick="cart('${JUICE[con-1].name}','${JUICE[con-1].price}', '${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">
                            Add to cart
                         </button>
                     </div>
                     <small class="tex-muted">Free Shipping</small>
                 </div>
             </div>
         </div>
     </div>

     `
}

function HTMLlegumeProduct(con){
    let URL =`../img/legumes/legume${con}.jpg`;
    let btn = `btnLegume${con}`;
    return `
    

     <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
             <img class="card-img-top" style="height:16rem;" src="${URL}" alt="card image cap"/>
             <div class="card-body">
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <i style="color:orange;" class="fa fa-star"></i>
                 <p class="card-text">${LEGUME[con-1].name}</p>
                 <p class="card-text">${LEGUME[con-1].price}.00</p>
                 <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                         <button type="button" onclick="cart2('${LEGUME[con-1].name}','${LEGUME[con-1].price}', '${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">
                             <a style="color:inherit;" href="/cart">Buy</a>
                         </button>
                         <button id="${btn}" type="button" onclick="cart('${LEGUME[con-1].name}','${LEGUME[con-1].price}', '${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">
                            Add to cart
                         </button>
                     </div>
                     <small class="tex-muted">Free Shipping</small>
                 </div>
             </div>
         </div>
     </div>

     `
}
//ANIMATION

function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        ShowConfirmButton:false,
        time:1000
    });
    toast({
        type:'success',
        title: 'Added to shopping'
    });

}
//CART FUNCTION

function cart(name,price,url,con,btncart){
     var item={
         name:name,
         price:price,
         url:url
     }
     cartItems.push(item);
     let storage = JSON.parse(localStorage.getItem("cart"));
       if(storage==null){
           products.push(item)
           localStorage.setItem("cart", JSON.stringify(products));
       }else{
           products = JSON.parse(localStorage.getItem("cart"));
           products.push(item)
           localStorage.setItem("cart", JSON.stringify(products));
       }

       products = JSON.parse(localStorage.getItem("cart"));
       cart_n.innerHTML=`[${products.length}]`;
       document.getElementById(btncart).style.display="none";
       animation();

}

function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
      if(storage==null){
          products.push(item)
          localStorage.setItem("cart", JSON.stringify(products));
      }else{
          products = JSON.parse(localStorage.getItem("cart"));
          products.push(item)
          localStorage.setItem("cart", JSON.stringify(products));
      }

      products = JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML=`[${products.length}]`;
      document.getElementById(btncart).style.display="none";
     

}

//RENDER
// function render(){

// }
(()=>{
    for(let index = 1; index <= 6; index++)
    {
        fruitDIV.innerHTML+= `${HTMLfruitProduct(index)}`;   
    }

    for(let index = 1; index <= 3; index++)
    {
       juiceDIV.innerHTML+= `${HTMLjuiceProduct(index)}`; 
       legumeDIV.innerHTML+= `${HTMLlegumeProduct(index)}`;  
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;

    }


});