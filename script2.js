/* 
  Code executed & Call Stack
  ===========================

*/


/*
1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
3. The Execution context is created in two phases
   a. Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the           global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
   b. Code Execution Phase : In this Phase, code is executed line by line.

4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the  execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.
*/



/*
var n = 2;
function square(num){
   var ans = num * num;
   return ans;
}
   var square2= square(n);
   var square4 = square(4);
*/

//Global Execution Context
/* Memory
 n : undefined
 square : function square(num){...}
 square2 : undefined
 square4 : undefined
 */


/* Code
    After the code execution memories undefined changes into values and undefined become 2.
*/
//note: after the execution complete the function run and make memory and code and it carry on...
//after the work done global execution context(code and memory) deleted and free the space.


//call Stack: this is just like stack it first store global execution context... 
