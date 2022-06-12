const LoopNames = (names) => {
    names.map((data, i) => {
        console.log(data)
    })
}

for (var i = 0; i <= 5; i++) {
    console.log(`${i}`)
}

console.log("Hello")

setTimeout(() => {
    console.log("In SetTimeout with timer 0")

    setTimeout(() => {
        LoopNames(["Rahul", "Ramesh"])
        console.log("Second SetTimeout with timer as 0")

        setTimeout(() => {
            console.log("Third SetTimeout with timer as 0")
        }, 0)
    }, 0)
},0) 

/*in this scenario first a global execution context will be created and given loop will be push in call stack and once it will be executed, 0-5 number will be printed in console and it will be pop out of the stack.
In next step given log method will be pushed in call stack which is "console.log('hello')". and once it be executed then it will be pop out of the stack and will be printed in the console and blobal execution context also will be pop out of the stack, 
 In next step main setTimeout (timer = 0) will be pushed in call stack, because it is an asynchronous opration so it will be pushed in saprate space (Node Api) once timer will expired then it will be pushed to callback queue and because call stack is empty and there is no synchronous opration is pending so event loop will push the setTimeOut into the call stack and once it will be executed and will be printed in console then it will be pop out of the stack,Then 2nd setTimeOut will be pushed in call stack and due to asynchronous opration it will be pushed in Node API and one it's timer will expired then it will be pushed in callback Queue,event loop will push this setTimeOut into the call stack and there is a function call so this function will be pushed in call stack there is itration of given function parameter array and also a log method so due to itration first element and 2nd element will be executed and will be printed in the console and will be pop out of the stack then log method which is given in 2nd setTimeOut will be pushed in call stack and executed then will be pop out of the stack,Then 3rd setTimeOut will be pushed in call stack then it will move to Node Api due too asynchronous opration and once it's timer will be expired then it will pushed to callback Queue then it will pushed call stack due to call stack is empty and it's log method will be executed and will be pop out of the stack..*/

// //  Event Loop------> event loop do manage opration between call stack and callback Queue.Means,The event loop continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order. if call stack is empty and there is no synchronous opration is pending then event loop push opration to call stack for execution.

// call stack--------->it is a mechanism that is used by an interpreter to manage the script execution and keep tracking which function is currently being run.

// callback Queue-------->The Callback Queue holds asynchronous opration that are ready to get fired.. 

// Stream------------->Streams are the objects which helps to read data from a source and write data to a destination. 

// Event Emitters----------> With an event emitter, we can simply raise a new event from a different part of an application, and a listener will listen to the raised event and have some action performed for the event.

