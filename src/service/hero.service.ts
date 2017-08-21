import { injectable, Container } from "inversify";
import { makeFluentProvideDecorator } from "inversify-binding-decorators";

import "reflect-metadata";

import { Hero, HeroModelMongo } from "../model/hero";
import { HEROES } from "../mock-hero";
import { provideSingleton } from "../inversify/ioc";

@provideSingleton(HeroService)
export class HeroService {
    getHeroes(): Promise<Hero[] | any> {
        const query = HeroModelMongo.find();
        return query.exec();
    }
}