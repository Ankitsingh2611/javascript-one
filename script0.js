// word and keyword
// var const let


// var ankit = "lab";             value can be change
// const Singh = "laby";         value can not change



//Hoisting - variable and function re hoisted which means the declaration is moved on the top of code
// we can declare it before
    //  console.log(a);
    //  var a;   this will go on top
    //  b = 12;




//types in js
//primitive and refrences

//primitives= numbers, strings, boolean, null, undefined
//references = [] () {}



//    Conditionals





//var function scoped hota h
//let braces scoped hota h





// execution context = imaginory container inside function


//how to copy refrence veriale(spred operator)
// var a = [1,2,3,4,5];
// var b = [...a]; 


/*
1. JavaScript has two version es5 (Older) and es6 (Newer).
es5 includes → var
es6  includes → var, let, const 
2. var is function scoped, means that - if you declared var anywhere in the function scope, you can easily access it within the function scope anywhere.
3. let is braces is scoped, you can access let variable within only the braces and not outside of it.
4. There are some features that we can use in JavaScript, that is not included in JavaScript but it can be still used and those features are called as ‘window’. And those features are provided by the browser. 
- var adds itself to window object. [It’s window and not windows]
- let and const don’t add themselves to window object. 
5. If you open console, and type window on it and hit enter. You can see the declared var variables inside it, which was the security concern. While on the other hand const and let don’t show their variable values inside the window object, which also one of the few reasons why it’s used more than var declaration.
6. When browser provide 3 features and they are called as browser context API. 
The 3 features are:
- Windows
- Stack
- Heap Memory
7. Stack: LIFO (Last In, First Out).
8. Heap Memory: Intermediate data which is generated during the process is stored in the Heap Memory. 
9. Whenever function runs, it creates and execution context. Execution context is basically an imaginary box which contain variable, function under the parent function and lexical environment of that function.  
10. Lexical environment basically act as scope. It tells which function can access which functions variable, like a scope chain. A child can access his parents variable, but a parent can’t access that child's variable, because that parent function is not declared inside the child function. 
11. To copy the reference values we use Spread syntax (...) to do it.
12. Falsy: 0 undefined null Nan document.all
Truthy: Besides all of the Falsy values, everything is Truthy. 
13. forEach act as a loop, which iterate over each value in an array. And because it iterate over each value in array, you can perform all of the operation related to array & iteration, like adding the original value with another value etc. 
One thing to remember is forEach make changes in the array values, but the original array values never get changed. It creates its own temporary copy to perform the operations. 
14. forin act as a loop, which iterate over each value in an object. 
15. do-while: firstly perform the operation then check the condition.
16. Callback function: It basically sets an time limit, and after that time limit a particular task or function gets executed only if the task inside that function is completed otherwise it will keep waiting until the task inside that function is completed, and after it’s completed it will basically print it out on the screen.
17. First class functions: You can store functions inside an variable.
18. Arrays in JavaScript are technically Objects. Where objects key acts as arrays index and it’s value as arrays value. And because of this property, you can create an negative index in array and assign it a value. 
19. To delete an obj, write delete.keyName;


*/



//Forin loop
// var obj = {
//     name: "John",
//     age: 25
// };
// for (var key in obj) {
//     console.log(key + " : " + obj[key]);
// }

//forEach loop
// var a = [1, 2, 3, 4, 5];
// a.forEach(function (value) {
//     console.log(value + 2);
// });




// callback function
// setTimeout(function (){
//     console.log("2 sec baad chlega");
// }, 2000);



//delete
// var obj = {
//     name: "John",
//     age: 25
// };
// delete obj.name;