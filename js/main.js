function updateBalance(amountId) {
    const balanceInput = document.getElementById(amountId);
    const balanceInputText = balanceInput.value;
    const balanceAmount = parseFloat(balanceInputText);
    balanceInput.value = '';
    return balanceAmount
    
};


/*  bug 
// show the balance
function showValue (showValueId) {
const showValueInput = document.getElementById(showValueId);
const showValueText = showValueInput.innerText;
return showValueInput.innerText= percentage

}; */
/* const balanceInput = document.getElementById('balance');
const balanceText = balanceInput.innerText;
balanceInput.innerText = balance;
 */
document.getElementById('calculate-button').addEventListener('click', function () {
    // income
    const income = updateBalance('income-input');

    /* const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText); 
    incomeInput.value = '';*/

            // food
    const food = updateBalance('food-input');

/*  const foodInput = document.getElementById('food-input');
    const foodText = foodInput.value;
    const food =parseFloat(foodText)
    foodInput.value = ''; */
             // rent
    const rent = updateBalance('rent-input');
    
    // cloth
    const cloth = updateBalance('clothe-input')
    
        // calculate
        const totalExpenses = food + rent + cloth; 
        const balance = income - totalExpenses;
        
        // show the totalExpenses
        const totalExpensesInput = document.getElementById('total-expenses');
        const totalExpensesText = totalExpensesInput.innerText;
        totalExpensesInput.innerText = totalExpenses;

 // show the balance
        const balanceInput = document.getElementById('balance');
        const balanceText = balanceInput.innerText;
        balanceInput.innerText = balance;

    /*     //saving area
        let percentage = ((saveInput/100)*income).toFixed(3);
document.getElementById('saving-btn').addEventListener('click', function () {
    // incomplete
const saveInput = showValue('percent-input');
    }); */
});
