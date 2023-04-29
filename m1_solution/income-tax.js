/*
Problem Statement 
Develop an income tax calculator that computes the income tax that is owed for an 
income amount. When a user enters an income amount and clicks the Calculate 
button, this application displays the income tax owed. 

Income Tax Slabs: 
 
Income Amount                                     Income Tax Percentage

Less than or equal to 2,50,000                            No Tax 

Greater than 2,50,000 and less than or 
equal to 5,00,000                                         5% 

Greater than 5,00,000 and less than or 
equal to 10,00,000                                        20%

Greater than 10,00,000                                    30% 
 
Steps: 
▪ Accept the income amount entered by the user 
▪ Prompt the user if it is an invalid input 
▪ Refer to the income tax slabs given above to calculate the income tax 
*/

function calculateTax() {
    let income = parseFloat(document.getElementById("income").value);
    let tax = 0;
  
    if (isNaN(income) || income < 0) {
      alert("Invalid input. Please enter a valid income amount.");
      return;
    }
  
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
  
    document.getElementById("result").innerHTML = "Income Tax: " + tax.toFixed(2);
  }
  

