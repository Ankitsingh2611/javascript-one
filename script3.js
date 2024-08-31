//Hoisting: Hoisting is a phinomina in javascipt by which you can access the variables and functions even before you initialize it or you can access it without any error.
/*
1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.
 */

var x=7;
function getname(){
    console.log("Ankit");
}
getname();
console.log(x);