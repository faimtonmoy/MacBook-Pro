// Memory Payment Buttons calculation
function ramPayment(isCharge)
{
    const ramPayment= document.getElementById('ram-payment');
    
    if(isCharge)
    {
        ramPayment.innerText= 180;
    }
    else
    {
        ramPayment.innerText=0;
    }
    finalTotal();
    
}
document.getElementById('ram-zero').addEventListener('click', function(){
    ramPayment(false);
})
document.getElementById('ram-charge').addEventListener('click', function(){
    ramPayment(true);
})


//Extra Storage Payment Button Collection
function storagePayment(type)
{
    if(type== 'usual')
    {
        document.getElementById('storage-cost').innerText= 0;
       
    }
    else if(type== 'medium')
    {
        document.getElementById('storage-cost').innerText= 100;
    }
    else if(type== 'large')
    {
        document.getElementById('storage-cost').innerText= 180;
    }
    finalTotal();

}
document.getElementById('ssd-usual').addEventListener('click', function(){
    storagePayment('usual');
})
document.getElementById('ssd-medium').addEventListener('click', function(){
    storagePayment('medium');
})
document.getElementById('ssd-large').addEventListener('click', function(){
    storagePayment('large');
})


// delivery charge
function deliveryPayment(isDelivery)
{
    const deliveryCost= document.getElementById('delivery-cost');
    if(isDelivery)
    {
        deliveryCost.innerText= 20;
    }
    else
    {
        deliveryCost.innerText=0;
      
    }
    finalTotal();
    
}

document.getElementById('delivery-zero').addEventListener('click', function(){
    deliveryPayment(false);
})
document.getElementById('delivery-charge').addEventListener('click', function(){
    deliveryPayment(true);
})



// Final Total Calculation
function finalTotal()
{
    const totalPrice= document.getElementById('total-price');
    const basePrice= document.getElementById('base-price').innerText;
    const ramPrice= document.getElementById('ram-payment').innerText;
    const storageCost= document.getElementById('storage-cost').innerText;
    const deliveryCost= document.getElementById('delivery-cost').innerText;
    totalPrice.innerText= parseInt(basePrice)+ parseInt(ramPrice)+ parseInt(storageCost)+ parseInt(deliveryCost);
    promoTotal(totalPrice.innerText); // calling promo code function to check whether it has any promo or not, then putting the final value in the output


}
//promo code button
document.getElementById('promo-button').addEventListener('click', function(){
    const totalPrice= document.getElementById('total-price');
    promoTotal(totalPrice.innerText);
})
//Promo code check and final total output after discount
function promoTotal(totalPrice)
{
    const promoInput= document.getElementById('promo-input');
    if(promoInput.value== 'stevekaku')
    {
        totalPrice= parseFloat (totalPrice) * .80;
        promoInput.value= '';
    }
    document.getElementById('final-total').innerText= totalPrice;

}