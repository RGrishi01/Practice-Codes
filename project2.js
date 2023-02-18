let color = function set(_read, next) {
    setTimeout( function() {
    document.body.style.backgroundColor = _read;
    console.log(`${_read}`);
    next && next(); 
}, 3000)
}

color('red', 
    color('green',
        color('purple',
            color('blue', ))));

// function set(_colour) {
//     setTimeout(function() {
//         console.log("hello");
//         document.body.style.backgroundColor = _colour;
//     }, 3000);
// }

// set('red');