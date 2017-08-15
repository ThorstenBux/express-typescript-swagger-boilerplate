import { injectable, Container } from "inversify";
import { makeFluentProvideDecorator } from "inversify-binding-decorators";

import "reflect-metadata";

import { Resume } from "../model/resume";
import { resume_data } from "../mock-resume";
import { provideSingleton } from "../inversify/ioc";

@provideSingleton(ResumeService)
export class ResumeService {
    getResume(): Promise<Resume> {
        return Promise.resolve(resume_data);
    }
}