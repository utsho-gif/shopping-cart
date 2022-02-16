function plusMinusValue(product, price, issAdd){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(issAdd == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else{
        if(productInput.value >= 1){
            productNumber = parseInt(productNumber) - 1;
        }
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
    
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal; 
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}


    // case update
document.getElementById('case-plus').addEventListener('click', function(){
    plusMinusValue('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    plusMinusValue('case', 59, false)
})
    // phone update
document.getElementById('phone-plus').addEventListener('click', function(){
    plusMinusValue('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    plusMinusValue('phone', 1219, false)
})