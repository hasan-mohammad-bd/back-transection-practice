document.getElementById("deposit-button").addEventListener("click", function(){
    //adding deposit amount
    const inputArea = document.getElementById("deposit-input");
    const inputAreaText = inputArea.value;
    const inputAreaValue = parseFloat(inputAreaText);

    const storeArea = document.getElementById("deposit-total");
    const storeAreaText = storeArea.innerText;
    const storeAreaValue = parseFloat(storeAreaText);

    const totalValueStored = storeAreaValue + inputAreaValue;
    storeArea.innerText = totalValueStored;

    inputArea.value = "";

    //adding balance amount

    const balanceArea = document.getElementById("balance-total");
    const balanceAreaText = balanceArea.innerText;
    const balanceAreaValue = parseFloat(balanceAreaText);

    const totalBalanceStored = balanceAreaValue + inputAreaValue;
    balanceArea.innerText = totalBalanceStored;
})

//adding withdraw button

document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInputArea = document.getElementById("withdraw-input");
    const withdrawInputAreaText = withdrawInputArea.value;
    const withdrawInputAreaValue = parseFloat(withdrawInputAreaText);

    const withdrawTotalArea = document.getElementById("withdraw-total");
    const withdrawTotalAreaText = withdrawTotalArea.innerText;
    const withdrawTotalAreaValue = parseFloat(withdrawTotalAreaText);

    const totalWithdrawValue = withdrawInputAreaValue + withdrawTotalAreaValue;
    withdrawTotalArea.innerText = totalWithdrawValue;

    withdrawInputArea.value = "";

    //deducting balance amount;

    const balanceArea = document.getElementById("balance-total");
    const balanceAreaText = balanceArea.innerText;
    const balanceAreaValue = parseFloat(balanceAreaText);

    const totalBalanceStored = balanceAreaValue - withdrawInputAreaValue;
    balanceArea.innerText = totalBalanceStored;
})