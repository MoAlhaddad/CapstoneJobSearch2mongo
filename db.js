const mongoose = require("mongoose");
dbconnect()
async function dbconnect(){

    try{
        await mongoose.connect('mongodb+srv://mohamad25:Ma6cr7rmfc$@cluster0.kozop.mongodb.net/mohamad25', {useNewUrlParser : true});
        console.log('Mongo Db Connection Success')
    } catch (error) {
        console.log('Mongo Db Conncection Failed')

    }
}

module.exports = mongoose