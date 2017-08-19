import { Get, Route } from "tsoa";
// IMPORTANT: reflect-metadata needs to be imported otherwise the dependency injection won't work
import "reflect-metadata";
import { provideSingleton } from "../inversify/ioc";


@Route("Api")
@provideSingleton(ApiController)
export class ApiController {
    @Get()
    async getApi(): Promise<string> {
        console.log("get API");
        return await Promise.resolve("getApi");
    }
}