import { Get, Route } from "tsoa";


@Route("Api")
export class ApiController {
    @Get()
    public async getApi(): Promise<string> {
        console.log("get API");
        return "getApi";
    }
}

// export let getApi = (req: Request, res: Response) => {
//     console.log("get API");
//     res.send("getApi");
// };