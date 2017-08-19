import { injectable, Container } from "inversify";
import { makeFluentProvideDecorator } from "inversify-binding-decorators";

import "reflect-metadata";

import { Hero } from "../model/hero";
import { HEROES } from "../mock-hero";
import { provideSingleton } from "../inversify/ioc";

@provideSingleton(HeroService)
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}