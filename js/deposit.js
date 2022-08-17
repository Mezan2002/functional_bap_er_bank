document.getElementById("deposit_btn").addEventListener("click", function () {
  const newDeposit = getInputValueById("deposit_input");
  const previousValue = getTotalById("deposit_total");
  const updateOnDeposit = newDeposit + previousValue;
  setNewValue("deposit_total", updateOnDeposit);
  const previousBalanceTotal = getTotalById("balance_total");
  const newBalanceTotal = previousBalanceTotal + newDeposit;
  setNewValue("balance_total", newBalanceTotal);
});
