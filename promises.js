const p = new Promise((resolve, reject) => {
    // resolve(1);

    setTimeout(() => {
        reject(new Error('message'));
        // resolve(1);
    }, 2000)

});

p.then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));

