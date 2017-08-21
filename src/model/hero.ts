import { prop, Typegoose, Ref } from "typegoose";
import { City } from "./city";

export class Hero extends Typegoose {
    @prop()
    heroId: number;
    @prop()
    name: string;

    @prop()
    mainCity: City;
}

export const HeroModelMongo = new Hero().getModelForClass(Hero);


