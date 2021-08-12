/* // variable (var and let)
var myVariable = 'first variable';
let myVariable2 = 'second variable';

// constant 
const myConstant = 'my constant';

// variable naming convention
var myFirstVariable;
var var1;
var my_first_variable;
var

function;
var $myVar;
 */

// Difference between variable and constant. 

// // variable
// let myVar = 10;
// console.log(myVar);
// myVar = 20;
// console.log(myVar);

// // constant
// const x = 30;
// console.log(x);

// x = 50;
// console.log(x);

// const PI = 3.1416;

// console.log(PI);
// PI = 333333;

// console.log(PI);

// let x = 10; // global
/* 
function testing() {
    if (true) {
        // var x = 10;
        let x = 10;
        console.log(x);
    }
    if (true) {
        console.log(x);
    }
    console.log(x);
}

testing() */

/* 
//Operators
// 1. Arithmetic operators (+, - , * , /, % ,++ ,--)
var x = 10;
// console.log(++x);

var a = 10;
var b = 20;
b = b % a;
// console.log(a);

// 2. assignment operators (=, += , -=, *= , /= , %=)
b %= a;

// 3. comparison operators (== , ===,!= ,!==, < , >, <= , >=)
var a = 10;
var b = "10";

console.log(a === b); */

/* 
//Data types
// 1. Primitive data types
        1. number
        2. string
        3. boolean
        4. undefined
        5. null


// 2. object data types 
        1. Array
        2. object
        3. function
*/


// String methods and properties
// var name = 'Hiro Alom';
// var x = 100;
// console.log(x);
// x = String(x)
// console.log(x);
// console.log(name[2]);
// console.log(name.length);
// console.log(name.slice(5, 9));
// console.log(name.slice(0, 4));
// name = name.replace('Alom', 'sakib')
// console.log(name);

// console.log(name);
// name = name.toUpperCase()
// console.log(name);
// name = name.toLowerCase()
// console.log(name);

// console.log("Hiro" + ' ' + "Alom");
// console.log("Hiro " + "Alom");
// console.log("Hiro", "Alom");

// var str1 = "Hiro "
// var str2 = "Alom "
// console.log(str1.concat(str2));
// var name = '                    Hiro Alom                             ';
// console.log(name.trim());
// var name = "Hiro"
// name = name.padStart(10, 0)
// console.log(name);
// var name = "Hiro"
// name = name.padEnd(10, 0)
// console.log(name);

// var name = 'Hiro Alom';
// console.log(name.charAt(5));

//charCodeAt(position)

// var str = "amr sonar bangla ami tomay valobashi";
// console.log(str.split(''));


// Number and it's method.

// var x = "Hasan";
// var x = "100";
// console.log(x);
// console.log(Number(x));

// var x = 10;
// var y = Number("100")
// console.log(y);

// var z = 100;
// var a = z.toString()
// console.log(z);
// console.log(a);

// var x = 45.235525252;
// console.log(x.toFixed(4));

// var y = 12.34215225;
// console.log(y);
// y = y.toPrecision(4)
// console.log(y);

// var num = "12"
// var num = 12.3421525;
// var num = 12.3421525
// console.log(parseInt(num));
// console.log(parseFloat(num));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// Math and its properties and methods.
// console.log(Math.PI.toFixed(4));

// var x = 2.5;
// console.log(Math.round(x));
// var x = -120;
// console.log(Math.abs(x));

// var x = 20.1234;
// console.log(Math.floor(x));
// var x = 20.1234;
// console.log(Math.ceil(x));

// console.log(Math.pow(5, 2));
// console.log(Math.sqrt(81));

// console.log(Math.max(12, 85, 854, 14, 24, 25, 14, 2))
// console.log(Math.min(12, 85, 854, 14, 24, 25, 14, 2))

// console.log(Math.ceil((Math.random().toFixed(1)) * 10));

// var myArray = [50, 45, 25, 241, 24, 275, 24];
// var arr = ["banana", "apple"]
// var arr = Array(50, 45, 45, 241, 24, 24, 24);

// console.log(myArray);
// console.log(myArray[2]);
// myArray[2] = 210;
// console.log(myArray);
// myArray.push(500)
// myArray.unshift(100)
// myArray.pop()
// myArray.shift()
// console.log(myArray);
// console.log(myArray.length);
// myArray.forEach(element => {
//     console.log(element);
// });
// console.log(myArray.concat(arr));

// console.log(myArray.indexOf(275));
// console.log(myArray.indexOf(100));

// console.log(arr.sort());


function totalSales(cart) {
    let totalPrice = 0;
    for (const product of cart) {
        const productPrice = product.Price * product.Quantity;
        totalPrice = totalPrice + productPrice;
    }
    return totalPrice;
}
const output = totalSales([{
        Name: 'T-Shirt',
        Price: 100,
        Quantity: 10
    },
    {
        Name: 'Pant',
        Price: 200,
        Quantity: 5
    },
    {
        Name: 'Shoes',
        Price: 500,
        Quantity: 2
    }
])
console.log(output);