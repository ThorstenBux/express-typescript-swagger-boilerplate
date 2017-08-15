import { Get, Route } from "tsoa";
import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { provideSingleton } from "../inversify/ioc";

import { ResumeService } from "../service/resume.service";
import { Resume } from "../model/resume";

@Route("Resume")
// @provideSingleton(ResumeController)
@provideSingleton(ResumeController)
export class ResumeController {
    // Injection objects is possible without the @inject decorator because TS exports the needed metadata automatically when we use 'reflect-metadata'
    constructor(private resumeService: ResumeService) { }
    @Get()
    async getResume(): Promise<Resume> {
        return this.resumeService.getResume().then(
            async resume => {
                console.log("Resume name: " + resume.basics.name);
                return await resume;
            });
        // return "getResume";
    }
}
