const BooksModel = require( './booksModel' );

function handleGetBooks(req, res) {
    BooksModel.find({}, (error, data) => {
        if (error) console.log(`error reading from the db: ${error}`);
        else res.send(data);
    })
    
}

module.exports = handleGetBooks;