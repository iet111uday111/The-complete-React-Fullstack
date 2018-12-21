/**
 * Javascript
 */
var winner = true;

function user(){
    var winners = false;
}

user();

console.log(winner);
console.log(winners);

/**
 * ES6
 */

const value = 10;
let winner = false;

if(value == 10){
    let winner = true;
    console.log(`Inside if: ${winner}`);
}

console.log(`outside if: ${winner}`);


/**
 * ES6
 */

/**
 * Every Time it Shows : You have clicked Div No. 4
 */
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var Divs = document.getElementsByTagName("div");
        console.log(Divs);

        for (var index = 0; index < Divs.length; index++) {
            Divs[index].addEventListener('click', function () {
                console.log('You have clicked Div No.', index);
            })
        }
    }
}


/**
 * You have clicked Div No. 0
 *You have clicked Div No. 1
 *You have clicked Div No. 2
 *You have clicked Div No. 3
 * let created it's own scope.
 */
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var Divs = document.getElementsByTagName("div");
        console.log(Divs);

        for (let index = 0; index < Divs.length; index++) {
            Divs[index].addEventListener('click', function () {
                console.log('You have clicked Div No.', index);
            })
        }
    }
}

/**
 * Excercise 1
 * Which of these variables would you change to let or const ?
 * 
 */

var name = "James";
var employeeId = 25;
var eyes = "Blue";
var age = 25
var position = "Developer";
var salary = 2500;
var knowdlege = ['Javascript','PHP','REACT','Angular 4'];
var married = false;

/**
 * Solution
 */

const name = "James";
const employeeId = 25;
const eyes = "Blue";
let age = 25
let position = "Developer";
let salary = 2500;
let knowdlege = ['Javascript','PHP','   ','Angular 4'];
let married = false;

/**
 * Excercise
 */

const cupcake = document.querySelector('.cupcake');
const container = document.querySelector('.orders')

const cupcakes = [
 {id:1,flavor:'Strawberry'},
 {id:2,flavor:'Apple'},
 {id:3,flavor:'Banana'}
]

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const dicountID = 2;
const dicountAmount = 3;
let message

cupcake.addEventListener("click",function(){
 // Select a random cupcake
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

 // Increment the order number, we get a different order with each cupcake.
 orderNumber += 1;

 // Depending on the "dicountID" variable, this cupcake is on sale or not.
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;

 // Create the message
 message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
 container.insertAdjacentHTML('beforeend',message)

});

