//clicking on arrow icon for any row on first page will change display of first page to 'none' and second page to 'flex' (second page replaced first page and vice versa)
const firstPageButtons = document.querySelectorAll('.selection-row-arrowFirst');

for (let i=0; i<firstPageButtons.length; i++) {
    firstPageButtons[i].addEventListener('click', function() {
        const firstPage = document.querySelector(`.selection-row${i}-first`);
        const secondPage = document.querySelector(`.selection-row${i}-second`);
        firstPage.style.display = 'none';
        secondPage.style.display = 'flex';
    })
}

//same logic but arrow icon on second page switches first page back to 'flex' and second page back to 'none'. 
const secondPageButtons = document.querySelectorAll('.selection-row-arrowSecond');

for (let i=0; i<secondPageButtons.length; i++) {
    secondPageButtons[i].addEventListener('click', function() {
        const firstPage = document.querySelector(`.selection-row${i}-first`);
        const secondPage = document.querySelector(`.selection-row${i}-second`);
        firstPage.style.display = 'flex';
        secondPage.style.display = 'none';
    })
}

//dropdown appear/dissapear
const cartBtn = document.querySelector('.nav-cart-container');
const cartDropDownContainer = document.querySelector('.cart-dropDown');
const cartDropDownCancel = document.querySelector('.cart-dropDown-close');

cartBtn.addEventListener('click', function() {
    cartDropDownContainer.style.display = 'block';
})

cartDropDownCancel.addEventListener('click', function() {
    cartDropDownContainer.style.display = 'none';
})

//dropdown menu hidden
const cartDropdown = document.querySelector('.cart-dropDown-items');

//every single + symbol
const addToCartButtons = document.querySelectorAll('.addToCart');

    //name of item
const foodNames = document.querySelectorAll('.selection-row-foodName');

    //price of item
const foodPrices = document.querySelectorAll('.selection-row-title');

    //weight of item
const foodWeights = document.querySelectorAll('.selection-row-weight');

const items = [];
let total = 0;

//calculates total price of all items in shopping cart and displays on DOM
function calculateTotal() {
    const totalPriceText = document.querySelector('.cart-totalPrice');
    const itemsPrice = document.querySelectorAll('.dropDown-price');
    for (let i=0; i<itemsPrice.length; i++) {
        total += Number(itemsPrice[i].textContent.substring(1))
    }
    totalPriceText.textContent = '$' + total.toFixed(2);
}

for (let i=0; i<addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {

        //if item in 'Items' array
        if (items.includes(addToCartButtons[i].value)) {
            //pushes item clicked on to 'items' array
            items.push(addToCartButtons[i].value);
            
            //loops through 'items' array and if item current item clicked on matches current index of item, itemQuantity++. After loop ends, itemQuantity is displayed on DOM for x item in cart
            let itemQuantity = 0;
            const currentItem = addToCartButtons[i].value;
            for (let i=0; i<items.length; i++) {
                if (currentItem === items[i]) {
                    itemQuantity++;
                }
            }
            const amount = document.querySelector(`.dropDown-amount${i}`);
            amount.textContent = itemQuantity;

            //takes quantity (itemQuantity) of x item and multiplies it by x price before displaying total price of x item on DOM
            const price = document.querySelector(`.dropDown-price${i}`);
            const totalPrice = Number(itemQuantity) * Number(foodPrices[i].textContent.substring(1));
            price.textContent = '$' + totalPrice.toFixed(2);

            //calculates final checkout price and displays on DOM
            calculateTotal(); 

        } else { // if item is NOT in 'Items' array
            items.push(addToCartButtons[i].value); 

            // newItem - item added to dropdown when addToCart button is clicked on
            const newItem = document.createElement('div');
            newItem.className = 'dropDown-item';
            newItem.innerHTML =                 
                `<div class='dropDown-title${i} dropDown-title dropDown-info'>
                    
                </div>
                <div class='dropDown-amount${i} dropDown-amount dropDown-info'>
                    <p class='amount-items'></p>
                </div>
                <div class='dropDown-price${i}         dropDown-price dropDown-info'>

                </div>`;

            //renders 'newItem' on index.html
            cartDropdown.appendChild(newItem);
            const title = document.querySelector(`.dropDown-title${i}`);
            const amount = document.querySelector(`.dropDown-amount${i}`);
            const price = document.querySelector(`.dropDown-price${i}`);
            title.textContent = foodNames[i].textContent;
            amount.textContent = '1';
            price.textContent = foodPrices[i].textContent;

            calculateTotal();
        }
        console.log(items)
    })
}
