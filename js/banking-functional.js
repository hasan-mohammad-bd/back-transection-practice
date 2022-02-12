function inputAmount(inputID) {
    //to get input from inputBox
    const inputField = document.getElementById(inputID);
    const inputFieldText = inputField.value;
    const inputFiledValue = parseFloat(inputFieldText);


    inputField.value = "";
    return inputFiledValue;    
}

function amountAdding(amountID, amount){
    //to get amount which will be added.
    const amountAdding = document.getElementById(amountID);
    const amountAddingText = amountAdding.innerText;
    const previousAmountAdding = parseFloat(amountAddingText);
    const theTotalAmount = previousAmountAdding + amount;
    amountAdding.innerText = theTotalAmount
    return amountAdding.innerText;
}

function balanceAmount(){
    //get only the total balance value
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function totalBalanceAmount(amount, addIf){
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = balanceAmount();
    if(addIf == true){
       const totalBalance = balanceTotalAmount + amount;
       balanceTotal.innerText = totalBalance;
       
    }
    else {
        const totalBalance = balanceTotalAmount - amount;
        balanceTotal.innerText = totalBalance;
    }
}


document.getElementById("deposit-button").addEventListener("click",function(){
    const inputValue = inputAmount("deposit-input");

    if(inputValue > 0){
        amountAdding("deposit-total", inputValue);
        totalBalanceAmount(inputValue, true);
    }
   
})

document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawValue = inputAmount("withdraw-input");
    const balanceTotal = balanceAmount();
    if(withdrawValue > 0 && withdrawValue < balanceTotal){
        amountAdding("withdraw-total", withdrawValue);  
    } else {
        alert("Please put valid amount or You don't have sufficient balance");

    }



})

