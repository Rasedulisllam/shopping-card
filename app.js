
// get input value
function GetInput(product){
    const productInput=document.getElementById(product+'-input');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}

// calculate total price 
function CalculateTotal(){
    const totalMobilePrice=GetInput('mobile')*1219;
    const totalCasePrice=GetInput('case')*59;
    const totalPrice=totalMobilePrice+totalCasePrice;
    document.getElementById('subTotal-price').innerText=totalPrice;

    // tex calculation
    const totalTex=(totalPrice*10)/100;
    document.getElementById("tex-price").innerText=totalTex;

    // total Price caldulation
    const totalPriceAmount=totalPrice+totalTex;
    document.getElementById('total-price').innerText=totalPriceAmount;
}


// input fild set functin
function GetInputValue(product,price,isInrise){
    const productInput=document.getElementById(product+'-input');
    let productText =productInput.value;
    const productNumber=parseInt(productText);
    
    if(isInrise){
        productText=productNumber+1;
        
    }
    else if(isInrise != true && productNumber>0){
        productText=productNumber-1;
    }
    productInput.value=productText;
    // update price
    const priceField=document.getElementById(product+"-price");
    priceField.innerText=productText*price;
    CalculateTotal();
}


document.getElementById("mobile-plus").addEventListener("click",function(){
    // const productInput=document.getElementById('mobile-input');
    // const productText=productInput.value;
    // const productNumber=parseInt(productText) + 1;
    // productInput.value=productNumber;
    GetInputValue("mobile",1219,true);
})
document.getElementById("mobile-minus").addEventListener("click",function(){
    // const productInput=document.getElementById('mobile-input');
    // const productText=productInput.value;
    // const productNumber=parseInt(productText) + 1;
    // productInput.value=productNumber;
    GetInputValue("mobile",1219,false);
})

document.getElementById('case-plus').addEventListener("click",function(){
    GetInputValue("case",59,true);
})
document.getElementById('case-minus').addEventListener("click",function(){
    GetInputValue("case",59,false);
})