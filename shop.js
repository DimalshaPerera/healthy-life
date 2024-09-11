//create array of product objects
const items = [
    {
        id: 0,
        image: 'elevate.png',
        title: 'Jump Rope',
        price: 2500,
        desc: " Boost your cardio with our jump rope"
    },
    {
        id: 1,
        image: 'weight.png',
        title: 'Ankle Weights',
        price: 3000,
        desc: " Intensify workouts with fixed weights ."
    },
    {
        id: 2,
        image: 'band.png',
        title: 'Resistance Band',
        price: 2000,
        desc: " Enhance workouts with our versatile band."
    },
    {
        id: 3,
        image: 'knee.png',
        title: 'Knee Pad',
        price: 2500,
        desc: " Shield knees during your workouts."
    },
    {
        id: 4,
        image: 'bottle.png',
        title: 'Water Bottle',
        price: 1000,
        desc: " Stay hydrated with our durable bottle."
    },
    {
        id: 5,
        image: 'bell.png',
        title: 'Kettlebell',
        price: 1500,
        desc: " Elevate your workouts with our kettlebells."
    },
    {
        id: 6,
        image: 'shaker.png',
        title: 'Shaker Bottle',
        price: 1500,
        desc: " Mix drinks on the go with our leak proof bottle."
    },

];
let cartItems = 0;
let basketItems = [];







    const shopContainer = document.querySelector('.shop');
    const sidebar = document.querySelector('.sidebartop');
    const sidebarbot = document.querySelector('.sidebarprice');




    //update basket and total price everytime a product is added to cart
    function updateBasket() {
        sidebar.innerHTML = `<h1> Your Cart <i class="fa fa-shopping-cart" style="color:black; position:relative; top:0;"></i> <span class="cartAmount">${cartItems}</span></h1>
                               <hr>`;
        let total = 0;
        for (let i = 0; i < basketItems.length; i++) {
            const item = basketItems[i];
            if (item.quantity != 0) {


                sidebar.innerHTML += `<div class=products><div><img src="${item.image}"></div>
                                <div>
                                ${item.title} - ${item.quantity} = Rs.${item.price * item.quantity}</div>
                                <div>
                                <button onclick="add1Item(${i})"><i class="fa-solid fa-plus"></i></button>
                                <button onclick="remove1Item(${i})"><i class="fa-solid fa-minus"></i></button>
                                <button onclick="removeFromCart(${i})"><i class="fa-solid fa-trash"></i></button>
                                </div>
                                </div>`;
                total += item.price * item.quantity;
            }
        }
        sidebarbot.innerHTML = `<h3>Total Price: Rs.${total}</h3>`;


    }
    function addToCart(productId) {
        let productToAdd;
        // Find the product with the given productId
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === productId) {
                productToAdd = items[i];
                break;
            }
        }

        // Get the quantity of the product selected by the user
        const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);

        // Check if the product already exists in the basketItems array
        let productExists = false;
        for (let i = 0; i < basketItems.length; i++) {
            if (basketItems[i].id === productToAdd.id) {
                // If the product exists, update its quantity
                basketItems[i].quantity += quantity;
                productExists = true;
                break;
            }
        }

        // If the product doesn't exist, add it to basketItems
        if (!productExists) {
            const item = { ...productToAdd, quantity };
            basketItems.push(item);
        }

        // Call the updateBasket function to update the UI

        updateQuantity();
        updateBasket();
    }





    // generate product cards in shop grid by iterating throught the product array
    for (let i = 0; i < items.length; i++) {
        shopContainer.innerHTML += `
    <div class="grid-item">
        <img class="product-img" src="${items[i].image}" alt="${items[i].title}">
        <div class="product-description">
            <h2>${items[i].title}</h2>
            <h3>Rs. ${items[i].price}</h3>
            <h4>${items[i].desc}</h4>
            <label>Quantity</label>
             <input type="number" class="quantityInput" min="1"value="1" id="quantity-${items[i].id}">
            <button onclick="addToCart(${items[i].id})"><i class="fa-solid fa-cart-plus"></i></button>

        </div>
    </div>
`;

    }

    //update basket and total price everytime a product is deleted
    function remove1Item(productPostition) {
        basketItems[productPostition].quantity -= 1;

        updateQuantity();

        updateBasket();


    }

    function removeFromCart(productPostition) {
        basketItems.splice(productPostition, 1)
        updateQuantity();
        updateBasket();
    }

    function add1Item(productPostition) {
        basketItems[productPostition].quantity += 1;
        updateQuantity();
        updateBasket();
    }

    function updateQuantity() {
        let product;
        cartItems = 0;

        for (let i = 0; i < basketItems.length; i++) {
            product = basketItems[i];
            cartItems += product.quantity;

            console.log(cartItems);
        }
    }

    const clear = document.getElementById('clearBasket');
    clear.addEventListener('click', function () {
        basketItems = [];
        updateQuantity();
        updateBasket();
    })


    // Checkout button event listener
    const checkout = document.getElementById('checkout');
    checkout.addEventListener('click', function () {
        sessionStorage.setItem('basketItems', JSON.stringify(basketItems));
        // Calculate total price
        let total = 0;
        for (const item of basketItems) {
            total += item.price * item.quantity;
        }

        // Redirect to checkout page with total price parameter
        if (total != 0) {

            window.location.href = `checkout.html?totalPrice=${total}`;
        }
        //give a message asking to add ateast 1 product to cart
        else {
            alert("You need to select atleast 1 product to checkout");
            sidebarbot.innerHTML = `<p>You need to select atleast 1 product to checkout</p>`

        }
    });

