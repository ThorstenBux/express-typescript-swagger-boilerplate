# express-typescript-swagger-boilerplate
Boilerplate to create REST webservices using Express, Tyepscript and Swagger. Inclusive automatic swagger.json and route creation from controller-modules. 

Enhanced by Inversify to enable dependency injection (DI)

I used [tsoa](https://www.npmjs.com/package/tsoa) for automatic Swagger doc generation, [InversifyJS](https://github.com/inversify/InversifyJS) for DI, [ExpressJS](https://expressjs.com/) as server and enhanced it with [Typescript](typescriptlang.org)


Look at https://www.npmjs.com/package/tsoa for more information about Swagger generation and usage of Inversify with tsoa

## MongoDB
It includes a connection to mongoDB. The location of the database is defined in ```src/config/mongodb.ts```. To make the mongoDB connection work you need to create a database called hero and add one hero-document into the database:
    {
         "_id" : ObjectId("599a2ea06cea13a2e01ff4ff"),
        "heroId" : 11,
        "name" : "Mr. Nice",
        "id" : "1"
    }
A Typescript way of connection to mongoDB is provided by [typegoose](https://github.com/szokodiakos/typegoose)

## Swagger
The swagger generated API doc is available at http://localhost:3000/api-doc