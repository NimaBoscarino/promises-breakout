// postgres
const { Client } = require('pg')
const client = new Client({
    database: 'promises_lecture'
})

client.connect()

// client.query('SELEasdfhjajksdfgjkCT * FROM quotes')
//     .then(result => {
//         console.log('rows', result.rows)
//     })
//     .catch(error => {
//         console.log('There was an error')
//     })
//     .finally(() => {
//         client.end()
//         console.log('Client closed!')
//     })
  

// request
const fetch = require('node-fetch');

// fetch('https://api.kanye.rest')
// 	.then(res => res.json())
// 	.then(json => console.log(json));


// 1. fetch a quote from kanye.rest. What if it fails?

// fetch('https://api.kanye.rest')
// 	.then(res => res.json())
//     .then(json => {
//         client.query('INSERT INTO quotes(text)  VALUES ($1::text)', [json.quote])
//     })
//     .then(result => {
//         console.log('Success!')
//     })
//     .catch(error => {
//         console.log('There was an error')
//     })
//     .finally(() => {
//         client.end()
//         console.log('Client closed!')
//     })


// 2. add a quote to the quotes table. What if it fails?
// client.query('INSERT INTO quotes(text)  VALUES ($1::text)', ['Hello world'])

// fetch('https://api.kanye.rest')
// 	.then(res => res.json())
//     .then(json => {
//         return client.query('INSERT INTO quotes(text)  VALUES ($1::text)', [json.quote])
//     })
//     .then(result => {
//         console.log('Success!')
//     })
//     .catch(error => {
//         console.log('There was an error')
//     })
//     .finally(() => {
//         client.end()
//         console.log('Client closed!')
//     })


// 3. Do both!

// 4. Get count of quotes

// 5. Get count, fetch quote, add to quotes table, get count



// example with function for modularity

const getAndParseQuote = () => {
    return fetch('https://api.kanye.rest')
	    .then(res => res.json())
}

const insertIntoDatabase = (json) => {
    return client.query('INSERT INTO quotes(text)  VALUES ($1::text)', [json.quote])
}

getAndParseQuote()
    .then((json) => insertIntoDatabase(json))
//  .then(insertIntoDatabase)
    .then(result => {
        console.log('Success!')
    })
    .catch(error => {
        console.log('There was an error')
    })
    .finally(() => {
        client.end()
        console.log('Client closed!')
    })
