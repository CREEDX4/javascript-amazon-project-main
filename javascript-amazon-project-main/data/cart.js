let storedCart = null;

try {
  storedCart = JSON.parse(localStorage.getItem('cart'));
} catch (error) {
  console.warn('Failed to parse cart from localStorage, resetting to default.', error);
}

export let cart = Array.isArray(storedCart)
  ? storedCart
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


function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

    
export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        };
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else{
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
        
    };

    saveToStorage();

};

/*create a new array, loop through the cart, add each product to the new array, except for this product id*/
export function removeFromCart (productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
};

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (!matchingItem) {
        console.warn(`No cart item found for productId: ${productId}`);
        return;
    }

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}