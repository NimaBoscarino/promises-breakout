const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A value!')
    }, 2000)
})

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Another value!')
    }, 1000)
})

const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Wooow a value!')
    }, 500)
})

promise1()
    .then(val => {
        console.log(val)
        return promise2()
    })
    .then(val => {
        console.log(val)
        return promise3()
    })
    .then(val => console.log(val))


// When will you need to CREATE promises?

// In my experience, pretty much never in day-to-day web dev.

// Maybe if you're making special libraries and tools.
// Or changing legacy code to have a promise API.