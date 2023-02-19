// Method 1(callback hell):
// let color = function set(_color, next) {
//         setTimeout( function() {
//         document.body.style.backgroundColor = _color;
//         console.log(`${_color}`);
//         next && next(); 
//     }, 1000)
// }

// color('red', function() {
//     color('green', function() {
//         color('purple', function() {
//             color('blue', () => {})
//         })
//     })
// });

// Method 2(using promises):
let color1 = function set(_color, _delay) {
    return new Promise( function(resolve, reject) {
        setTimeout(() => {
            document.body.style.backgroundColor = _color;
            resolve();
        }, 1000)
    })
}

color1('red', 1000)
    .then(() => {return color1('green', 1000)})         // can be written as: .then(() => color1('green', 1000))
    .then(() => color1('purple', 1000))
    .then(() => color1('blue', 1000))
    .catch(() => reject());

// Method 3(using async and await):
async function colors() {
    await color1('red', 1000);
    await color1('green', 1000);
    await color1('purple', 1000);
    return "All Done";
}
colors();