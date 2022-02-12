// console.log('page heading')
totalCalculation(); 
function updateProductNumber(isIncreasing,price,type){
    const productInput = document.getElementById(type+'-number');
    let productNumber = parseInt(productInput.value);
    if(isIncreasing == true){
        productNumber =  productNumber+1;
    }else if(productNumber > 0 && isIncreasing == false){
        productNumber = productNumber-1;
    }
    productInput.value = productNumber;
    const productPriceObject = document.getElementById(type+'-price');
    const totalProductPrice = productNumber * price;
    productPriceObject.innerText = totalProductPrice;
}

function totalCalculation(){
    const casePriceObject = document.getElementById('case-price');
    const phonePriceObject = document.getElementById('phone-price');
    const caseTotalPrice = parseFloat(casePriceObject.innerText);
    const phoneTotalPrice = parseFloat(phonePriceObject.innerText);

    const subTotal = caseTotalPrice + phoneTotalPrice;
    const tax = (subTotal * (15/100)).toFixed(2);
    const grandTotal = subTotal + parseFloat(tax);

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

//phone plus
document.getElementById('phone-plus').addEventListener('click', function(event){
    updateProductNumber(true,1219,'phone');
    totalCalculation();  
})
//phone minus
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber(false,1219,'phone');
    totalCalculation();    
})

//case plus
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber(true,59,'case');
    totalCalculation();  
})
//case minus
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber(false,59,'case');
    totalCalculation();    
})
