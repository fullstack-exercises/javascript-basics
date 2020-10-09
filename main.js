//// Part A

// makeCheeseSandwich
//     Get one slice of bread
//     Add cheese
//     Put a slice of bread on top

function makeCheeseSandwich() {
    console.log('Get one slice of bread');
    console.log('Add cheese');
    console.log('Put a slice of bread on top');
}

makeCheeseSandwich();

//// Part B
// Declaring function
function makeSandwich(toppings) {
    console.log('Get one slice of bread');
    console.log('Add' + ' ' + toppings);
    console.log('Put a slice of bread on top');
    console.log('There you go, a sandwich with' + ' ' + toppings);
}

makeSandwich('pulled pork'); // calling function
makeSandwich('BBQ chicken'); // calling function with another topping

//// Part C
function calculateDiscountedPrice(totalAmount, discount) {
    console.log('With the discount you only have to pay ' + Math.round((totalAmount - discount)) + '€');
}

calculateDiscountedPrice(234.34, 25);

//// Part D
function calculateDiscountedPriceAbove25(totalAmount, discount) {
    if (totalAmount >= 25) {
        console.log('With the discount you only have to pay ' + Math.round((totalAmount - discount)) + '€');
    } else {
        console.log('You don\'t get any discount below 25€');
    }
}

calculateDiscountedPriceAbove25(205, 25);