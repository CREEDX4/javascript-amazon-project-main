// export let cart; is actually a short cut for export let cart = undefined;
// loadFromStorage: function() {} as a method  can be written as loadFromStorage() {}
// in oop....use PascalCase as the standard naming convention for things that generate objects
// the issue is were geting data for all the objects from the save storage key

function Cart() {
    const cart = {
        cartItems: undefined,
        storedCart: undefined,

        loadFromStorage() {
            
            this.storedCart = null;

            try {
            this.storedCart = JSON.parse(localStorage.getItem('cart-oop'));
            } catch (error) {
            console.log('Failed to parse cart from localStorage, resetting to default.', error);
            }
            //either cart ir cartItems
            this.cartItems = Array.isArray(cart.storedCart)
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
        },

        saveToStorage(){
            localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
        },

                
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

        },

        /*create a new array, loop through the cart, add each product to the new array, except for this product id*/
        removeFromCart (productId) {
            const newCart = [];

            this.cart.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;
            this.saveToStorage();
        },

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
    };

    return cart;
}

const cart = Cart();
const businessCart = Cart()

cart.loadFromStorage();

businessCart.loadFromStorage();

console.log (cart);
console.log (businessCart);













/* cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

console.log(cart); */







