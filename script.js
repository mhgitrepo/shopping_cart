//iPhone 11 128GB Black - Plus
// document.getElementById("plus").addEventListener("click", function(){
//     //Increment
//     handleProductChange(true);
// });

//iPhone 11 128GB Black - Minus
// document.getElementById("minus").addEventListener("click", function(){
//     //Decrement
//     handleProductChange(false);
// });

function handleProductChange (product, isIncrease){
    // const productInput = document.getElementById(product + "-count");
    // const productCount = parseInt(productInput.value);
    const productCount = getInputValue (product);
    // const valueNewCount = valueCount - 1;
    let productNewCount = productCount; // let = will change this value.
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    // const unitTotal = productNewCount * 1219;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }

    document.getElementById(product + "-total").innerText = '$' + productTotal;
    calculateTotal();
}

function calculateTotal(){
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);
    const phoneCount = getInputValue('phone');

    // const caseInput = document.getElementById("case-count");
    // const caseCount = parseInt(caseInput.value);
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    // const totalPrice = getInputValue(product) * 1219 + caseCount * 59;
    document.getElementById("total-price").innerText=  '$' + totalPrice;

    //Calculate Tax
    // const tax = (totalPrice * 0.1).toFixed(0);
    const tax = Math.round(totalPrice * 0.1);
    const toaxTotal = document.getElementById('tax-amount').innerText = '$' + tax;
    //Grand Total
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue (product){
    // console.log(product);
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}

//check put page hide after purchasing.
document.getElementById("check-out").addEventListener("click", function(){
    // console.log("Clicked!");
    //Cart Page
    document.getElementById("cart-page").style.display = "none";
    //Thank you page
    document.getElementById("thank-you-page").style.display = "block";
});

// function handlePhoneChange(isIncrease){
//     const valueInput = document.getElementById("quantity");
//     const valueCount = parseInt(valueInput.value);
//     // const valueNewCount = valueCount - 1;
//     let valueNewCount = valueCount; // let = will change this value.
//     if(isIncrease == true){
//         valueNewCount = valueCount + 1;
//     }
//     if(isIncrease == false && valueCount > 0){
//         valueNewCount = valueCount - 1;
//     }
//     valueInput.value = valueNewCount;
//     const unitTotal = valueNewCount * 1219;

//     document.getElementById("price").innerText = '$' + unitTotal;
// }

// function handleCaseChange(isIncrease){
//     const caseInput = document.getElementById("caseQuantity");
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;

//     document.getElementById("casePrice").innerText = caseTotal;
// }

// document.getElementById("plus").addEventListener("click", function(){
//     //Increment
//     // const valueInput = document.getElementById("quantity").value;
//     const valueInput = document.getElementById("quantity");
//     const valueCount = parseInt(valueInput.value);
//     const valueNewCount = valueCount + 1;
//     // document.getElementById("quantity").value = valueNewCount;
//     valueInput.value = valueNewCount;
//     const unitTotal = valueNewCount * 1219;

//     document.getElementById("price").innerText = unitTotal;
// });

// //iPhone 11 128GB Black - Minus
// document.getElementById("minus").addEventListener("click", function(){
//     //Decrement
//     const valueInput = document.getElementById("quantity");
//     const valueCount = parseInt(valueInput.value);
//     const valueNewCount = valueCount - 1;
//     valueInput.value = valueNewCount;
//     const unitTotal = valueNewCount * 1219;

//     document.getElementById("price").innerText = unitTotal;
// });

//iPhone 11 Silicone Case - Black - Plus
// document.getElementById("casePlus").addEventListener("click", function(){
//     //Increment
//     handleProductChangeTwo(true);
// });

//iPhone 11 Silicone Case - Black - Minus
// document.getElementById("caseMinus").addEventListener("click", function(){
//     handleProductChangeTwo(false);
// });




// document.getElementById("casePlus").addEventListener("click", function(){
//     //Increment
//     const caseInput = document.getElementById("caseQuantity");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;

//     document.getElementById("casePrice").innerText = caseTotal;
// });

// //iPhone 11 Silicone Case - Black - Minus
// document.getElementById("caseMinus").addEventListener("click", function(){
//     const caseInput = document.getElementById("caseQuantity");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;

//     document.getElementById("casePrice").innerText = caseTotal;
// });