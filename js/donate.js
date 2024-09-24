document.getElementById('btn-donate').addEventListener('click',function(event){
    event.preventDefault
    const totalAmount = getTextFieldById('total-amount')
    const donationAmount = getInputFieldById('donation-amount')  
    const amountForNoakhali = getTextFieldById('amount-for-noakhali')

    if(isNaN(donationAmount)){
        alert("Type Correct number to Donate money")
        return
    }
    
    const currentAmount = totalAmount - donationAmount
    const currentAmountForNoakhali = amountForNoakhali + donationAmount
    console.log(currentAmount, currentAmountForNoakhali);

    if(currentAmount < 0){
        alert('You do not have enough money')
        return
    }

    document.getElementById('total-amount').innerText = `${currentAmount} BDT`
    document.getElementById('amount-for-noakhali').innerText = `${currentAmountForNoakhali} BDT`
    
    
    
})