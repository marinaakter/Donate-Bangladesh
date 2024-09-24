// Donation for Noakhali
document.getElementById('btn-donate-1').addEventListener('click', function(event){
    event.preventDefault();
    const totalAmount = getTextFieldById('total-amount');
    const donatedAmountNoakhali = getInputFieldById('donation-amount');  
    const amountForNoakhali = getTextFieldById('amount-for-noakhali');

    if(isNaN(donatedAmountNoakhali)){
        alert("Type Correct number to Donate money");
        return;
    }
    
    const currentAmount = totalAmount - donatedAmountNoakhali;
    const currentAmountForNoakhali = amountForNoakhali + donatedAmountNoakhali;

    if(currentAmount < 0){
        alert('You do not have enough money');
        return;
    }
    if(donatedAmountNoakhali <= 0){
        alert('You entered Negative value. Please try again!');
        return;
    }

    document.getElementById('total-amount').innerText = `${currentAmount} BDT`;
    document.getElementById('amount-for-noakhali').innerText = `${currentAmountForNoakhali} BDT`;

    addDonationHistory(donatedAmountNoakhali, 'Famine-2024 at Noakhali');
});

// Donation for Feni
document.getElementById('btn-donate-2').addEventListener('click', function(event){
    event.preventDefault();
    const totalAmount = getTextFieldById('total-amount');
    const donatedAmountFeni = getInputFieldById('donated-amount-feni');  
    const amountForFeni = getTextFieldById('amount-for-feni');

    if(isNaN(donatedAmountFeni)){
        alert("Type Correct number to Donate money");
        return;
    }

    const currentAmountFeni = totalAmount - donatedAmountFeni;
    const currentAmountForFeni = amountForFeni + donatedAmountFeni;

    if(currentAmountFeni < 0){
        alert('You do not have enough money');
        return;
    }
    if(donatedAmountFeni <= 0){
        alert('You entered Negative value. Please try again!');
        return;
    }

    document.getElementById('total-amount').innerText = `${currentAmountFeni} BDT`;
    document.getElementById('amount-for-feni').innerText = `${currentAmountForFeni} BDT`;

    addDonationHistory(donatedAmountFeni, 'Flood Relief in Feni');
});

// Donation for Quota Movement
document.getElementById('btn-donate-3').addEventListener('click', function(event){
    event.preventDefault();
    const totalAmount = getTextFieldById('total-amount');
    const donatedAmountQouta = getInputFieldById('donated-amount-qouta');  
    const amountForQuota = getTextFieldById('amount-for-qouta');

    if(isNaN(donatedAmountQouta)){
        alert("Type Correct number to Donate money");
        return;
    }

    const currentAmountQuota = totalAmount - donatedAmountQouta;
    const currentAmountForQuota = amountForQuota + donatedAmountQouta;

    if(currentAmountQuota < 0){
        alert('You do not have enough money');
        return;
    }
    if(donatedAmountQouta <= 0){
        alert('You entered Negative value. Please try again!');
        return;
    }

    document.getElementById('total-amount').innerText = `${currentAmountQuota} BDT`;
    document.getElementById('amount-for-qouta').innerText = `${currentAmountForQuota} BDT`;

    addDonationHistory(donatedAmountQouta, 'Aid for Injured in Quota Movement');
});



const toggle = document.querySelectorAll('.toggle-status')
toggle.forEach(button => {
    button.addEventListener('click', () => {
        toggle.forEach(btn => btn.classList.remove('bg-green-300'));
        button.classList.add('bg-green-300');
        button.classList.remove('bg-gray-300');
        toggle.forEach(btn => {
            if (btn !== button) {
                btn.classList.add('bg-gray-300');
            }
        });
    });
});