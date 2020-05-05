// We want to write code that works, but sometimes there are things that are out of our control

// Good programmers account for edge cases, for several reasons

// We want to know when errors happen so that we can fix them

// We want to know when errors happen so that we can let users know

// If a program runs into an error, we might have a fallback or contingency plan

// In JavaScript we can _usually_ use try...catch to handle situations that might fail

try {
    // stuff
} catch (error) {
    // handle the error
}

// However, this won't work with callbacks!

// Why won't the following code properly catch errors?

try {
    fetchThingFromInternet((thing) => {
        console.log(thing)
    })
} catch (error) {
    console.log('Unfortunately, we could not fetch the thing.')
}

// Error handling with callbacks usually follows the "error-first" pattern

fetchThingFromInternet((error, thing) => {
    if (error) {
        console.log('Unfortunately, we could not fetch the thing.')
    } else {
        console.log("Here's the thing!", thing)
    }
})

// Neat!