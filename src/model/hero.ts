import { prop, Typegoose } from "typegoose";

export class Hero extends Typegoose {
    @prop()
    heroId: number;
    @prop()
    name: string;
}

export const HeroModelMongo = new Hero().getModelForClass(Hero);


