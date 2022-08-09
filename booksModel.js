const mongoose = require('mongoose');
const BooksSchema = require('./schema');
const BookModel = mongoose.model('BookModel', BooksSchema);



const unlockingAndroid = new BookModel({
    title: 'Unlocking Android',
    description: 'Unlocking Android: A Developer\'s Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.',
    image: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg',
    status: "PUBLISH"
});

const flexibleRails = new BookModel({
    title: 'Flexible Rails',
    description: 'Flexible Rails created a standard to which I hold other technical books. You definitely get your money\'s worth',
    image:'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg',
    status: "PUBLISH"
});

const Coffeehouse = new BookModel({
    title: 'Coffeehouse',
    description: "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web",
    image : 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg',
    status: "PUBLISH"
})

// unlockingAndroid.save();
// flexibleRails.save();
// Coffeehouse.save();

module.exports = BookModel