// Donation For Noakhali
document.getElementById('btn-donate-1').addEventListener('click',function(event){
    event.preventDefault
    const totalAmount = getTextFieldById('total-amount')
    const donatedAmountNoakhali = getInputFieldById('donation-amount')  
    const amountForNoakhali = getTextFieldById('amount-for-noakhali')
    

    if(isNaN(donatedAmountNoakhali)){
        alert("Type Correct number to Donate money")
        return
    }
    
    const currentAmount = totalAmount - donatedAmountNoakhali
    const currentAmountForNoakhali = amountForNoakhali + donatedAmountNoakhali


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

    

    if(isNaN(donatedAmountFeni)){
        alert("Type Correct number to Donate money")
        return
    }
    
    const currentAmountFeni = totalAmount - donatedAmountFeni
    const currentAmountForFeni = amountForFeni + donatedAmountFeni

    if(currentAmountFeni < 0){
        alert('You do not have enough money')
        return
    }

    document.getElementById('total-amount').innerText = `${currentAmountFeni} BDT`
    document.getElementById('amount-for-feni').innerText = `${currentAmountForFeni} BDT`
    
})


// Donation for Quota Movement
document.getElementById('btn-donate-3').addEventListener('click',function(event){
    event.preventDefault
    const totalAmount = getTextFieldById('total-amount')
    const donatedAmountQouta = getInputFieldById('donated-amount-qouta')  
    const amountForQuota = getTextFieldById('amount-for-qouta')
    

    

    if(isNaN(donatedAmountQouta)){
        alert("Type Correct number to Donate money")
        return
    }
    
    const currentAmountQuota = totalAmount - donatedAmountQouta
    const currentAmountForQuota = amountForQuota + donatedAmountQouta
    


    if(currentAmountQuota < 0){
        alert('You do not have enough money')
        return
    }

    document.getElementById('total-amount').innerText = `${currentAmountQuota} BDT`
    document.getElementById('amount-for-qouta').innerText = `${currentAmountForQuota} BDT`
    
})


//History section
const div = document.createElement('div')
div.classList.add('text-red-500')
div.innerHTML = `
            <div class="flex items-center space-x-3 bg-red-600 text-white rounded-lg p-3 m-auto">
            <h6 class="text-lg font-bold">Cash Out</h6>
            
            </div>
            `



document.getElementById('history-section').appendChild(div)