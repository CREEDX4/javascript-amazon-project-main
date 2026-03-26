import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage,cart} from '../../data/cart.js';
/*import {renderPaymentSummary} from '../../scripts/checkout/paymentSummary.js'; */

describe('test suite: renderOrderSummary', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
        
        document.querySelector('.js-test-container').innerHTML = `
            <div class = "js-order-summary"></div>
            <div class = "js-payment-summary"></div> 

        `;

       

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
            productId: productId1,
            quantity: 2,
            deliveryOptionId: '1'
            },
            {
            productId: productId2,
            quantity: 1,
            deliveryOptionId: '2'
            }]);
        });
        
        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        renderOrderSummary();

    });

    it('displays the cart', () => {
        
        expect (
            document.querySelectorAll('.cart-item-container-test').length
        ).toEqual(2);     

        expect( 
            document.querySelector(`.product-quantity-test-${productId1}`).innerText
        ).toContain('Quantity: 2'); /*as long as quantity:2 is written somewhere there....not necessarily specific*/

         expect( 
            document.querySelector(`.product-quantity-test-${productId2}`).innerText
        ).toContain('Quantity: 1'); /*as long as quantity:2 is written somewhere there....not necessarily specific*/

        
    });

    it('removes a product', () => {

        document.querySelector(`.delete-link-test-${productId1}`).click();

        expect(
            document.querySelectorAll('.cart-item-container-test').length
        ).toEqual(1);

        expect(
            document.querySelector(`.product-quantity-test-${productId1}`)
        ).toEqual(null);

         expect(
            document.querySelector(`.product-quantity-test-${productId2}`)
        ).not.toEqual(null);

        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2);

        document.querySelector('.js-test-container').innerHTML = '';
    });

    afterEach(() =>{
        document.querySelector('.js-test-container').innerHTML = '';
    });
});































































/*random figma code inject test/* ₦30,000 ₦30,000 

width: 179px;
height: 16px;

font-family: 'SF Pro';
font-style: normal;
font-weight: 590;
font-size: 13px;
line-height: 16px;
/* identical to box height 
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout 
flex: none;
order: 0;
flex-grow: 1;  */
