import { Get, Route } from "tsoa";

import { Request, Response, NextFunction } from "express";

@Route("Resume")
export class ResumeController {
    @Get()
    async getResume(): Promise<string> {
        console.log("getResume");
        return "getResume";
    }
}
