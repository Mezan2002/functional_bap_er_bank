document.getElementById("withdraw_btn").addEventListener("click", function () {
  const newWithdrawInput = getInputValueById("withdraw_input");
  const preWithdrawValue = getTotalById("withdraw_total");
  const newWithdrawResult = newWithdrawInput + preWithdrawValue;
  setNewValue("withdraw_total", newWithdrawResult);
  const totalBalance = getTotalById("balance_total");
  const updateTotalBalance = totalBalance - newWithdrawInput;
  setNewValue("balance_total", updateTotalBalance);
});
