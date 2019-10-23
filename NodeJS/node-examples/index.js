/**
 * Strating file of my node js application
 * 
 * With node we have the option to use javascript or typescript(you need to install additional infrastructure for typescript), 
 * when nodes start supporting Typescript natively, then it makes more sense to move to Typescript 
 * here we will use javascript
 */

 var rect = require('./rectangle');

 function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        // if the error value is returned to you
        if (err) {
	        console.log("ERROR: ", err.message); //message property of the error object
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            // this area computation will automatically get the l and b that have been passed in by the rectangle call to direct node module earlier
            // this is the closure of JavaScript = A function defined inside another function automatically gets access to the variables that are declared in the outer function. 
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()"); // this display is done before the call of rectangle dur to the two-seconds delay
};

/**
 * this part will be executed only after a two-second delay because of the fact that we are using the setTimeout.
 * 
 * (err,rectangle) => {
        // if the error value is returned to you
        if (err) {
	        console.log("ERROR: ", err.message); //message property of the error object
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            // this area computation will automatically get the l and b that have been passed in by the rectangle call to direct node module earlier
            // this is the closure of JavaScript operating here.
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    }
    This 
 */

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);