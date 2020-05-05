// The classic issue with callbacks is CALLBACK HELL, where your code becomes incomprehensible as it
// becomes more and more nested

fetchCatFromInternet(
    (data) => storeInDatabase(
        data,
        () => countCatsInDatabase(
            (numberOfCats) => console.log(`There are now ${numberOfCats} cats in your database.`)
        )
    )
)

// imagine the above, but worse!

// The issues we'll look at, though, are:

// 1. Error handling in nested callbacks
// 2. Dynamimcally nesting callbacks

fetchCatFromInternet( // what if the cat API returns a 404?
    (data) => storeInDatabase( // what if the database doesn't exist?
        data,
        () => countCatsInDatabase( // what if the database connection is suddenly interrupted?
            (numberOfCats) => console.log(`There are now ${numberOfCats} cats in your database.`)
        )
    )
)

// We want to have each of these edge-cases handled.

fetchCatFromInternet( // what if the cat API returns a 404?
    (err, data) => {
        if (err) {
            console.log(err)
        } else {
            storeInDatabase( // what if the database doesn't exist?
                data,
                (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        countCatsInDatabase( // what if the database connection is suddenly interrupted?
                            (err, numberOfCats) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log(`There are now ${numberOfCats} cats in your database.`)
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)

// 🤮

// Obviously this is a problem.

// #2: Dynamically nesting callbacks? What does that mean?

// Sometimes I might want to:

// fetchCatFromInternet -> storeInDatabase -> countCatsInDatabase -> console.log

// and other times I might want to

// fetchCatFromInternet -> storeInDatabase -> findCutestCat -> console.log

// We would LIKE to be able to express these two workflows as cleanly as possible
// And possibly NOT have to hardcode it.

// i.e. i DONT want to write both

fetchCatFromInternet( // what if the cat API returns a 404?
    (data) => storeInDatabase( // what if the database doesn't exist?
        data,
        () => countCatsInDatabase( // what if the database connection is suddenly interrupted?
            (numberOfCats) => console.log(`There are now ${numberOfCats} cats in your database.`)
        )
    )
)

fetchCatFromInternet( // what if the cat API returns a 404?
    (data) => storeInDatabase( // what if the database doesn't exist?
        data,
        () => findCutestCat( // what if the database connection is suddenly interrupted?
            (cutestCat) => console.log(`The cutest cat is ${cutestCat}.`)
        )
    )
)

// I want to be able to arbitrarily tack on more things to this pipeline
// I want to allow OTHERS to tack on more things as well

const catPipeline = () => fetchCatFromInternet( // what if the cat API returns a 404?
    (data) => storeInDatabase( // what if the database doesn't exist?
        data,
        () => findCutestCat( // what if the database connection is suddenly interrupted?
            (cutestCat) => console.log(`The cutest cat is ${cutestCat}.`)
        )
    )
)

catPipeline() // run the pipeline
console.log('Finished running the pipeline!')
// how can I make sure that the console.log above runs at the END of the cat pipeline?

// There's nothing WRONG with having to do this, but it can be a bit of a headache to remember to do.
