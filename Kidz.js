var cartValue = document.getElementById("cart-value");
var cartBtn = document.getElementById("cart");
var addButtons = document.getElementsByClassName("buttonss");

var items = [
    {
        name: "This was our pact",
        quantity:0,
        dollars:7,
        cents:49,
    },
    {
        name:"The Famouse Five",
        quantity:0,
        dollars:4,
        cents:59,
    },
    {
        name:"Matilda",
        quantity:0,
        dollars:10,
        cents:0,
    },
    {
        name:"For young Readers",
        quantity:0,
        dollars:7,
        cents:29,
    },
    {
        name:"Wimpy Kid - DIY",
        quantity:0,
        dollars:4,
        cents:99,
    },
    {
        name:"Dart Board",
        quantity:0,
        dollars:17,
        cents:49,
    },
    {
        name:"Connect Four",
        quantity:0,
        dollas:19,
        cents:99,
    },
    {
        name:"Jenga",
        quantity:0,
        dollars:20,
        cents:99,
    },
    {
        name:"Monopoly",
        quantity:0,
        dollars:19,
        cents:49,
    },
    {
        name:"Bookmarks",
        quantity:0,
        dollars:12,
        cents:49,
    },
    {
        name:"Birtday card",
        quantity:0,
        dollars:12,
        cents:49,
    },
    {
        name:"Stuffed toys",
        quantity:0,
        dollars:15,
        cents:99,
    },
    {
        name:"Dream catcher drawing",
        quantity:0,
        dollars:18,
        cents:49,
    },
];


function cartUpdate() {
    let cart = 0;
    for (index = 0; index<items.length; index++){
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML = cart;
}

for(let i = 0;i < addButtons.length; i++){
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        cartUpdate();
    };
}

var totalDollar = 0;
var totalCents = 0;

function priceUpdate () {
    let totalPrice = 0;
    for(index =0; index<items.length; index++){
        totalPrice = totalPrice+ items[index].quantity * (items[index].dollars * 100 + items[index].cents);
    }
    totalDollar = Math.floor(totalPrice/100);
    totalCents = totalPrice%100;



    cartBtn.onclick = () => {
        priceUpdate();
    }


    for(let index= 0; index<items.length; index++){
        if(items[index].quantity != 0){
            console.log(`Item name ${items[index].name} -Quantity: ${items[index].quantity}`)
        };
    }

    console.log(`The total amount is ${totalDollar} $ and ${totalCents} cents`);
};
priceUpdate();