// postgres
const { Client } = require('pg')
const client = new Client({
    database: 'promises_lecture'
})
client.connect()
client.query('SELECT * FROM quotes')
    .then(result => {
        console.log('rows', result.rows)
    })
    .catch(error => {
        console.log('There was an error', error)
    })
    .finally(() => {
        client.end()
        console.log('Client closed!')
    })
  
// request
const fetch = require('node-fetch');
fetch('https://api.kanye.rest')
	.then(res => res.json())
	.then(json => console.log(json));


// 1. fetch a quote from kanye.rest. What if it fails?

// 2. add a quote to the quotes table. What if it fails?
client.query('INSERT INTO quotes(text)  VALUES ($1::text)', ['Hello world'])


// 3. Do both!

// 4. Get count of quotes

// 5. Get count, fetch quote, add to quotes table, get count
