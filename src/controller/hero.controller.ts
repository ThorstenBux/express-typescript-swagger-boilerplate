import { Get, Route } from "tsoa";
// IMPORTANT: reflect-metadata needs to be imported otherwise the dependency injection won't work
import "reflect-metadata";
import { provideSingleton } from "../inversify/ioc";

import { HeroService } from "../service/hero.service";
import { Hero } from "../model/hero";

@Route("Heroes")
@provideSingleton(HeroesController)
export class HeroesController {
    // Injection of objects is possible without the @inject decorator because TS exports the needed metadata automatically when we use 'reflect-metadata'
    constructor(private heroService: HeroService) { }
    @Get()
    async getHeroes(): Promise<Hero[]> {
        return this.heroService.getHeroes().then(
            async heroes => {
                console.log("Hero name: " + heroes[0].name);
                return await heroes;
            }).catch(error => console.log(`GetHeroes error: ${error}`));
    }
}
