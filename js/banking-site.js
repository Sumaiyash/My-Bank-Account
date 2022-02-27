// calculation side
document.getElementById("deposit-button").addEventListener('click', function () {
    // get deposit-input value
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    // const depositValue = parseFloat(depositText);
    // get current deposit value
    const depositeTotal = document.getElementById('deposit-total');
    const depositTotalText = depositeTotal.innerText;
    depositeTotal.innerText = depositText;
    // const depositeTotalValue = parseFloat(depositeTotalText);
    console.log(depositTotalText);
    // clear input field
    depositInput.value = '';
})