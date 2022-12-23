const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.7wo55hr.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: false,
        })
        console.log('MongoDB Conectada');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = conectarDB