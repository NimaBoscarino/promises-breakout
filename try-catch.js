try {
    throw 'Woo!'
    console.log('You wont see me')
} catch (error) {
    console.log('You had an error', error)
}

// I recommend taking a look at this