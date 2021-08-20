
// Final Total Calculation
function finalTotal()
{
    const totalPrice= document.getElementById('total-price');
    const basePrice= document.getElementById('base-price').innerText;
    const ramPrice= document.getElementById('ram-payment').innerText;
    const storageCost= document.getElementById('storage-cost').innerText;
    const deliveryCost= document.getElementById('delivery-cost').innerText;
    totalPrice.innerText= parseInt(basePrice)+ parseInt(ramPrice)+ parseInt(storageCost)+ parseInt(deliveryCost);


}
// Memory Payment Buttons calculation
function ramPayment(isCharge)
{
    const ramPayment= document.getElementById('ram-payment');
    
    if(isCharge)
    {
        ramPayment.innerText= 180;
        finalTotal();
    }
    else
    {
        ramPayment.innerText=0;
        finalTotal();
    }
    
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
        finalTotal();
    }
    else if(type== 'medium')
    {
        document.getElementById('storage-cost').innerText= 100;
        finalTotal();
    }
    else if(type== 'large')
    {
        document.getElementById('storage-cost').innerText= 180;
        finalTotal();
    }

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
        finalTotal();
    }
    else
    {
        deliveryCost.innerText=0;
        finalTotal();
    }
    
}

document.getElementById('delivery-zero').addEventListener('click', function(){
    deliveryPayment(false);
})
document.getElementById('delivery-charge').addEventListener('click', function(){
    deliveryPayment(true);
})