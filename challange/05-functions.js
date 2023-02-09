function calculateTotal (subTotal , Tax){
    return subTotal + Tax;
}

// console.log('The sum of subTotal and Tax : '+ calculateTotal(500,25.2));

const order1 = calculateTotal(100,20);
const order2 = calculateTotal(100,60);
const order3 = calculateTotal(100,90);

console.log(order1, order2, order3);