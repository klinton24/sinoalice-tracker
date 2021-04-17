import mongoose from 'mongoose';

//pass the uri of the db
export function connect(uri){
    //make a distinction between development environment and production environment
    //if production environement we will get the uri of the server from the environment.
    if(process.env.NODE_ENV === "production"){
        uri = process.env.MONGODB_URI // for saftey and security
    }
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    //need to handle 3 events. When we successfully connect, when an error occurs, and disconnected.
    mongoose.connection.on('connected', () => { // when a connection occurs.
        console.log(`Connected to ${uri}.`)
    })
    mongoose.connection.on('error', (err) => { // when an error occurs.
        console.log(`Connectoin error to ${err}.`)
    })
    mongoose.connection.on('disconnected', (err) => { // when a disconnection occurs.
        console.log(`Disconnected error to ${err}.`)
    })
}