// get input field values
function getInputValueById(inputField) {
  const inputDeposit = document.getElementById(inputField);
  const inputFieldValueString = inputDeposit.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputDeposit.value = "";
  return inputFieldValue;
}
// get total values
function getTotalById(idOfTotal) {
  const getPreviousTotalValue = document.getElementById(idOfTotal);
  const getPreviousTotalValueString = getPreviousTotalValue.innerText;
  const previousTotalValue = parseFloat(getPreviousTotalValueString);
  return previousTotalValue;
}
// set new values
function setNewValue(idOfSetNewValue, newValue) {
  const valueSetId = document.getElementById(idOfSetNewValue);
  valueSetId.innerText = newValue;
}
