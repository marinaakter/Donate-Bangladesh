// Donation For Noakhali
document.getElementById('btn-donate-1').addEventListener('click',function(event){
    event.preventDefault
    const totalAmount = getTextFieldById('total-amount')
    const donatedAmountNoakhali = getInputFieldById('donation-amount')  
    const amountForNoakhali = getTextFieldById('amount-for-noakhali')
    console.log(totalAmount, donatedAmountNoakhali, amountForNoakhali);
    

    if(isNaN(donatedAmountNoakhali)){
        alert("Type Correct number to Donate money")
        return
    }
    
    const currentAmount = totalAmount - donatedAmountNoakhali
    const currentAmountForNoakhali = amountForNoakhali + donatedAmountNoakhali
    console.log(currentAmount, currentAmountForNoakhali);

    if(currentAmount < 0){
        alert('You do not have enough money')
        return
    }

    document.getElementById('total-amount').innerText = `${currentAmount} BDT`
    document.getElementById('amount-for-noakhali').innerText = `${currentAmountForNoakhali} BDT`
    
})

// Donation for Feni
document.getElementById('btn-donate-2').addEventListener('click',function(event){
    event.preventDefault
    const totalAmount = getTextFieldById('total-amount')
    const donatedAmountFeni = getInputFieldById('donated-amount-feni')  
    const amountForFeni = getTextFieldById('amount-for-feni')
    console.log(donatedAmountFeni, amountForFeni);
    

    if(isNaN(donatedAmountFeni)){
        alert("Type Correct number to Donate money")
        return
    }
    
    const currentAmountFeni = totalAmount - donatedAmountFeni
    const currentAmountForFeni = amountForFeni + donatedAmountFeni
    console.log(currentAmountFeni, currentAmountForFeni);

    if(currentAmountFeni < 0){
        alert('You do not have enough money')
        return
    }

    document.getElementById('total-amount').innerText = `${currentAmountFeni} BDT`
    document.getElementById('amount-for-feni').innerText = `${currentAmountForFeni} BDT`
    
})

