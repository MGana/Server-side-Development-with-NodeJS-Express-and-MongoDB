//The callback is a function that is going to be supplied in when this module is called.

module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0) {
        /* setTimeout. So here, I am simulating the fact that whatever is being done in this rectangle is going to take some time. 
        So this is the asynchronous processing - delay before the callback function is called*/
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null), //This callback function, as you noticed, takes two parameters. The first one is the error and the second one is the return value. 
            2000); //the second parameter would be the time period for which this is going to be delayed.
    }
    else {
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)), //x, y would be already available here because of the closure that JavaScript supports.
                area:() => (x*y)
            }), 
            2000);
    }

}

/**
 * closure = A function defined inside another function automatically gets access to the variables that are declared in the outer function. 
 * 
 * The reason why I'm using the setTimeout is to simulate a delay before the callback comes in from the other side. 
 * So this sort of represents situations where, for example, you issue a database call to the database, and the database needs to be read 
 * before the value is passed back to you. So that is going to take a certain amount of time. 
 * So I'm basically simulating this at this moment by using the setTimeout function here.
 */