
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber
}

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}


function addDonationHistory(donatedAmount, title) {
    const historyDiv = document.createElement('div');
    historyDiv.classList.add('donation-history-item', 'p-5', 'border', 'rounded-lg', 'mb-2');

    const donationTime = `
        <p><strong>${donatedAmount} Taka is Donated for ${title}</strong></p>
        <p class='text-gray-600'>Date: ${new Date().toLocaleString()}</p>
    `;
    
    historyDiv.innerHTML = donationTime;
    document.getElementById('history-section').appendChild(historyDiv);
}