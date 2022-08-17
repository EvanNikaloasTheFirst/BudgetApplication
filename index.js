// Retrieving all of the HTML elements
let calculateBtn = document.getElementById('calculateBtn');
let calculateInput = document.getElementById('calculateInput');
let currentBudget = document.getElementById('currentBudget');
let balance = document.getElementById('balance')
let expenseInput = document.getElementsByClassName('expenseInput');
let currentExpense = document.getElementById('currentExpense');
let billsList = document.getElementsByClassName('billsList');
let expenseName = document.getElementById('expenseName');
// Cost of the expense
let expenseCost = document.getElementById('expenseCost')
let expenditureList = [];

// stores each incomes amount 
let incomeList = [];
// stores each expense amount 
let expenseArray = [];


// text node to append text to expense log

// expense = each expense object
// incomingMoney = money added to system
// delete obj = delete icon to delete an object

var expense,incomingMoney,deleteObj;


let expenseTotal = 0;
let incomeTotal = 0;

currentBudget.innerHTML =  "£" + 0
currentExpense.innerHTML =  "£" + 0

calculateExpense.addEventListener("click", function(){
    console.log('button clicked')
   
  
{
    // creates an object everytime the submit button is clicked
    let expense = {
                type : "expense",
                 
                amount: parseFloat(expenseCost.value),
            }

            if (expenseCost.value == '')
            {
                expenseCost.value = '0'
            }

            
            // Appends text to log all the expenses
            expense = document.createElement("p");
            expense.innerHTML = (expenseName.value + ":" + " " +  "£" + parseFloat(expenseCost.value));
            billsList[0].append(expense);
            expense.style.textAlign = "center";
            expense.style.position = "relative";
            // expense.style.right = "15px";
            console.log(expense);
            expense.style.color = 'red';

            

            // deleteObj = document.createElement('button');
            // deleteObj.innerHTML = 'X';
            // billsList[0].append(deleteObj);
            // deleteObj.style.textAlign = "center";
            // deleteObj.style.color = 'blue';
            // deleteObj.style.fontStyle = 'bold';
            // deleteObj.style.position = 'relative';
            // deleteObj.style.bottom = '20px';
            // deleteObj.style.left = '2px';
            // deleteObj.style.display = 'inline-block';
            // deleteObj.style.borderRadius = '12px';


           
            
            // adds (pushes) the object into the expenditureList array
            expenditureList.push(expense);  
            expenseArray.push(parseFloat(expenseCost.value))  
            console.log(expenseArray);
            calculateExpenses()
            // calculateBalance()
                   
}
// resets input box to empty after submission
expenseName.value  = " ";
expenseCost.value  = " "
})
console.log(expenditureList);

calculateBtn.addEventListener("click", function(){
{
    
    
    // creates an object everytime the submit button is clicked
    let income = {
        type : "income",
        title: parseFloat(calculateInput.value),
        
    }


// Adds an incoming amount to the transactions section
    incomingMoney = document.createElement("p");
    incomingMoney.innerHTML = ("Income: " + "£" + parseFloat(calculateInput.value));
            billsList[0].append(incomingMoney);
            incomingMoney.style.textAlign = "center";
            incomingMoney.style.color = 'white';
            incomingMoney.style.fontStyle = 'bold';
            incomingMoney.style.position = 'relative';


            // deleteObj = document.createElement('button');
            // deleteObj.innerHTML = 'X';
            // t.appendChild(deleteObj)
            // billsList[0].append(deleteObj);

            // deleteObj.style.textAlign = "center";
            // deleteObj.style.color = 'blue';
            // deleteObj.style.fontStyle = 'bold';
            // deleteObj.style.position = 'relative';
            // deleteObj.style.bottom = '20px';
            // deleteObj.style.left = '2px';
            // deleteObj.style.display = 'inline-block';
            // deleteObj.style.borderRadius = '12px';

            // deleteObj.addEventListener("click", function(){
            //     {
            //         // delete an object
            //         // console.log('clicked')
            //         // console.log(delete income.income)
                    
            //         for (let i = 0; i < incomeList.length; i++)
            //         {
            //             if (incomeList[i] ===(calculateInput.value))
            //             {
            //                 incomeList.splice(i,i);
            //                console.log(delete income.income)
            //                 i--; 
            //                 console.log('clicked')

                            
            //                 // t.parentNode.removeChild(t);
            //                 // deleteObj.parentNode.removeChild(deleteObj);
            //                 console.log(incomeList)
                            
            //             }
                        
            //         }
                    
            
            //     }
                
            // })


            

    incomeList.push(calculateInput.value)
    calculateBudget()
    calculateExpenses()
console.log
(incomeList)
}
calculateInput.value  = " "

})
// calculates the income added into the system,
function calculateBudget (income_list){
    incomeTotal = 0;
for ( i in incomeList)
{
    incomeTotal += parseFloat(incomeList[i])
}
currentBudget.style.color = 'green';
currentBudget.innerHTML =  "£" + incomeTotal;

}

// calculates the expenses
function calculateExpenses (expenseCost)
{
for (let i in expenseArray)
{
    expenseTotal += parseFloat(expenseArray[i])
    currentExpense.style.color = 'red';
    currentExpense.innerHTML =  "£" + expenseTotal


let completeTotal = 0;
completeTotal = incomeTotal - expenseTotal


balance.innerHTML  =  "£" + (incomeTotal - expenseTotal)
}
expenseTotal = 0;

console.log(expenseTotal)
}

