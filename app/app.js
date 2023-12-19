
/**
 * Creates an Express application.
 * @type {import('express').Express}
 */
const app = require('express')();

/**
 * Handles GET requests to the root path.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 */
app.get('/', (req, res) => {
    res.status(200).send('<!-- FILEPATH: /var/www/html/index.html -->\n\n<h1>Full Cycle Rocks!</h1>');
});


app.listen(8080, () => {
    console.log('Server is running on port 8080\n\n"Hello, World!"');
});
