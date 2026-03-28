class Cart {
    //cartItems = undefined;
    cartItems ;
    storedCart ;
    #localStorageKey ;

    constructor (localStorageKey) {

        this.#localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage() {
            
        this.storedCart = null;

        try {
        this.storedCart = JSON.parse(localStorage.getItem(this.localStorageKey));
        } catch (error) {
        console.log('Failed to parse cart from localStorage, resetting to default.', error);
        }
        //either cart or cartItems
        this.cartItems = Array.isArray(this.storedCart)
        ? this.storedCart
        : [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
            },
            {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
            }
          ];
    }

    saveToStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem
            };
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else{
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
            
        };

        this.saveToStorage();

    }

    removeFromCart (productId) {
        const newCart = [];

        this.cart.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (!matchingItem) {
            console.warn(`No cart item found for productId: ${productId}`);
            return;
        }

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}

function cartNow(localStorageKey) {
    const cart = {
    
    /*create a new array, loop through the cart, add each product to the new array, except for this product id*/
       

    };

    return cart;
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


console.log (cart);
console.log (businessCart);

console.log (businessCart instanceof Cart);
//check if this instance was generated from this class













/* cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

console.log(cart); */







