/**
 * Javascript
 */
// var winner = true;

// function user(){
//     var winners = false;
// }

// user();

// console.log(winner);
// console.log(winners);

/**
 * ES6
 */

// const value = 10;
// let winner = false;

// if(value == 10){
//     let winner = true;
//     console.log(`Inside if: ${winner}`);
// }

// console.log(`outside if: ${winner}`);


/**
 * ES6
 */

/**
 * Every Time it Shows : You have clicked Div No. 4
 */
// document.onreadystatechange = function () {
//     if (document.readyState === 'complete') {
//         var Divs = document.getElementsByTagName("div");
//         console.log(Divs);

//         for (var index = 0; index < Divs.length; index++) {
//             Divs[index].addEventListener('click', function () {
//                 console.log('You have clicked Div No.', index);
//             })
//         }
//     }
// }


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