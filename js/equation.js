
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
    let ramNumber=0;
    if(isCharge)
    {
        ramNumber= ramPayment.innerText= 180;
        finalTotal();
    }
    else
    {
        ramNumber= ramPayment.innerText=0;
        finalTotal();
    }
    
}
document.getElementById('ram-zero').addEventListener('click', function(){
    ramPayment(false);
})
document.getElementById('ram-charge').addEventListener('click', function(){
    ramPayment(true);
})