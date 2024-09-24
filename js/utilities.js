
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