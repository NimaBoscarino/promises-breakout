// Callbacks let us pass extra functionality into function calls

doCoolThing((stuff) => {
    console.log(stuff)
})

// Callbacks can be useful to pass in "handling" function to async calls

fetchCatFactFromInternet((fact) => {
    console.log(fact)
})

// Why would this likely not work?

const fact = fetchCatFactFromInternet() // an asynchronous call
console.log(fact)