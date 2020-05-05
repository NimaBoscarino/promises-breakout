// We're going to start with looking at USING promises.

fetchCatFromInternet( // what if the cat API returns a 404?
    (data) => storeInDatabase( // what if the database doesn't exist?
        data,
        () => countCatsInDatabase( // what if the database connection is suddenly interrupted?
            (numberOfCats) => console.log(`There are now ${numberOfCats} cats in your database.`)
        )
    )
)

const catPromise = fetchCatFromInternet()

// This returns a value that will resolve or reject in the future. We can move this value around!
// The benefit of this will become clear in upcoming demos.

// To reveal the result of a successful promise, we can use "then"

fetchCatFromInternet()
    .then(data => {
        console.log(data)
    })

// And to catch errors we can use "catch"

fetchCatFromInternet()
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })

// But the real joy is in COMPOSITION! We do this through chaining...

// This...
fetchCatFromInternet(
    (data) => storeInDatabase(
        data,
        () => countCatsInDatabase(
            (numberOfCats) => console.log(`There are now ${numberOfCats} cats in your database.`)
        )
    )
)

// Turns into this!
fetchCatFromInternet()
    .then(data => storeInDatabase(data))
    .then(() => countCatsInDatabase())
    .then(numberOfCats => console.log(`There are now ${numberOfCats} cats in your database.`))
    .catch(err => {
        console.log(err)
    }) // I even tacked on some error handling!

// But how does it work????

// As long as the function that you pass to THEN returns a PROMISE, then you can keep chaining this stuff!

// So some assumptions I made in this example are:

fetchCatFromInternet // returns a promise
storeInDatabase // returns a promise
countCatsInDatabase // returns a promise