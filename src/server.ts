import * as express from "express";
// https://www.npmjs.com/package/morgan
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as path from "path";

// https://www.npmjs.com/package/errorhandler
import * as errorHandler from "errorhandler";
// dotenv reads a configured .env file from a defined location and loads the values in process.env
import * as dotenv from "dotenv";

// the module tsoa automatically generates the routes from the annotations in the controller classes
import { RegisterRoutes } from "./routes";
// We still need to import the controller to have them crawled by the generator
import "./controller/api.controller";
import "./controller/hero.controller";

// Swagger support
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Define ExpressJS
const server = express();

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: `${server.get("env")}.env` });

/**
 * Establish MongoDB connection.
 * Needs to be after dotenv was loaded
 */
// import "./config/mongodb";

const DeepstreamServer = require("deepstream.io");
const C = DeepstreamServer.constants;
/*
The server can take
1) a configuration file path
2) null to explicitly use defaults to be overriden by server.set()
3) left empty to load the base configuration from the config file located within the conf directory.
4) pass some options, missing options will be merged with the base configuration
*/
const deepstreamServer = new DeepstreamServer();
// start the server
deepstreamServer.start();

/**
 * RouteHandler.
 */
// server.get("/api", apiRouteHandler.getApi);
RegisterRoutes(server);

// Serve the swagger ui at /api-docs
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve static HTML
server.use("/static", express.static(path.join(__dirname, "views")) );


// Configure ExpressJS
server.use(logger(process.env.MORGAN_LOGGER));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/*
 * Error Handler. Provides full stack - remove for production
*/
server.use(errorHandler());

server.listen(process.env.PORT, () => {
    console.log("Server is running at PORT: %s env: %s", process.env.PORT, server.get("env"));
});

module.exports = server;