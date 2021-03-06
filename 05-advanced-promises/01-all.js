// Using these familiar promises from earlier.

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

Promise.all([promise1, promise2, promise3])
    .then(([value1, value2, value3]) => console.log(value1, value2, value3))
