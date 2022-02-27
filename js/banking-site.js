// calculation side

document.getElementById("deposit-button").addEventListener('click', function () {
    // get deposit-input value
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositValue = parseFloat(depositInputText);

    // get current deposit value
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previoustTotalDeposit = parseFloat(depositTotalText);
    depositTotal.innerText = depositValue + previoustTotalDeposit;

    // clear input field
    depositInput.value = '';

    // total balance uptade
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance + depositValue;

});


document.getElementById("withdraw-button").addEventListener('click', function () {
    // get withdraw-input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawText);
    // get current deposit value
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previoustWithdrawTotalValue = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previoustWithdrawTotalValue + withdrawValue;

    // clear input field
    withdrawInput.value = '';

    // total balance uptade
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance - withdrawValue;

});
