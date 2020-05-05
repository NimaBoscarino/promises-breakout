// We often write fairly complicated programs that do _multiple_ things.

// e.g. fetch some data, store it in a database, run a query, then console.log

// If these things are synchronous it's no problem, we can just write this stuff in order!

// But if these thigns are ASYNCHRONOUS...

fetchCatFromInternet(
    (data) => storeInDatabase(
        data,
        () => countCatsInDatabase(
            (numberOfCats) => console.log(`There are now ${numberOfCats} cats in your database.`)
        )
    )
)

// This is fine?? I guess??

// We can run into a couple of issues...