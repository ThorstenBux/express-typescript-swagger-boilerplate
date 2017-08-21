import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

// This is needed till mongoose implements the ES2015 native Promises, which should be in version 5.x
(<any> mongoose).Promise = global.Promise;

const mongoDbUrl = process.env.MONGODB;
mongoose.connect(mongoDbUrl, {
    useMongoClient: true
  }, err => err ? console.log(`Unable to connect to mongoDB: ${err.code}:${err.name} Message:
        ${err.message} `) : console.log("Connected to MongoDB on : " + mongoDbUrl));

 // print mongoose logs in dev env
if (process.env.MONGOOSE_DEBUG) {
    mongoose.set("debug", true);
}