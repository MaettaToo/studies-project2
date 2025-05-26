/**
 * VARIABLES:
 * 
 * 0: (provide general description of the concept)
 * A variable is a container for a value, Eloquent Javascript refers to it as a binding or a tentacle.
 * Variables point at a value. The values can be different data types, including strings, booleans, 
 * arrays, objects, numbers or other data types. Variables must be identified with a unique name. 
 * Those names are called identifiers. Variables can change the values and type of to which they point.
 * 1. There are two phases of using variables declaration and initialization(assignment)
 * 2. Variables are created using the keywords var, let and const
 * 3. Variables can be hoisted. 
 * 
 * 
 * 
 * Declaration and assignment
 * 1. Declaration
 * There are four ways to declare a variable in Javascript, automatically or using the keywords let,const, or var. 
 * To declare a variable using keywords type the keyword followed by space, the identifier and a semicolon.  
 * Automatic creation of a variable happens when an identifier is assigned a value without using keywords. 
 * In the example below createdIt is an example of automatic variable declaration.
 *  
 *  a. Identifiers have naming conventions that must be followed in order for Javascript to read the variable.
 *          i.   Names can contain letters, digits, underscores, and dollar signs.
 *          ii.  Names must begin with a letter.
 *          iii. Names can also begin with $ and _ .
 *          iv.  Names are case sensitive (y and Y are different variables).
 *          v.   Reserved words (like JavaScript keywords) cannot be used as names
 *          vi.  Camel case should be used if using more than one word
 * 
 *  b.  Variables are undefined until they are assigned a value. In the examples below the variables isCreated,letsCreateIt and  iCreatedIt; 
 *      are undefined because they have not been assigned a value. Programmers will sometimes declare a variable without a value if the value is unknown.
        var  $isCreated;
        let  _letsCreateIt;
        const iCreatedIt; 
        createdIt = ‘today’ ;
        console.log(isCreated); // prints => undefined 

 * 2. Assignment 
    Variables  must be assigned a value or initialized to use. To assign a value to a variable after declaring it use the assignment operator. The declaration should be on the left side 
    of the operator and the value is on the right side of the operator.

    var isCreated = ‘initialization of the variable’;
    console.log(isCreated); // prints => 'initialization of the variable'
    
    3. Reassignment
        Variables declared with the keyword let and var can change their values.
        This change can be accomplished through reassignment. 
        To reassign a value after variable is initialized  you can use the operator  = or += to update the value. 

                let sum = 0;
                sum += 1; 
                console.log(sum); // prints => 1

        

 * fun fact
    You can declare many variables in one statement.
    Start the statement with let and separate the variables by comma:
    let person = "Bobby", carName = "Sentra", price = 18,000;
    console.log(person, carName, price); // prints => "Bobby" "Sentra" 18,000  

 * 
var, let, const
1. var
 “var” was the original  syntax used to declare variables, used from javascripts release in 1995 to 2015 (when let / const were introduced).
“var” variables can be redeclared and reassigned. Variables declared using var are function-scoped.
 Variables declared with var are hoisted to the top of their scope.
    a. Redeclaration and reassignment
        Variables declared with var can be reassigned and redeclared, meaning that once values are initilialized, they can be changed and mutated
        var allows you to re-declare variables within the same scope without throwing any errors, which can lead to unintended behavior.
        The var keyword allows the same variable (a) to be declared multiple times in the same scope without errors.
        The second declaration overwrites the previous value.
        var sum = 5;
        var sum = 10;
        console.log(sum); // prints => 10.
        var  sum1 = 7;
        sum1 = 10;
        console.log(sum1); // prints => 10.
    b. Scope
        Scope determines the accessibility (visibility) of variables. JavaScript variables have 3 types of scope, block scope,function scope and global scope.
        Variables declared outside any function or block are globally scoped.
         var is have globally scoped when declared outside a function.Here, globalVar is accessible globally and can be used anywhere in the script.

    c. Hoisting 



Hoisting

 */