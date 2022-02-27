// calculation side
document.getElementById("deposit-button").addEventListener('click', function () {
    // get deposit-input value
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    // const depositValue = parseFloat(depositText);
    // get current deposit value
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositText;
    // const depositeTotalValue = parseFloat(depositeTotalText);
    console.log(depositTotalText);
    // clear input field
    depositInput.value = '';
})
document.getElementById("withdraw-button").addEventListener('click', function () {
    // get withdraw-input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    // const depositValue = parseFloat(depositText);
    // get current deposit value
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText = withdrawText;
    // const depositeTotalValue = parseFloat(depositeTotalText);
    console.log(withdrawTotalText);
    // clear input field
    withdrawInput.value = '';
})