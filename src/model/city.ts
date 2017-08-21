import { prop, Typegoose } from "typegoose";

export class City extends Typegoose {
    @prop()
    cityName: string;
    @prop()
    planet: string;
}