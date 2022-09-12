import {Controller, Get} from '@nestjs/common'

// to get access to the request object : localhost:3000/app/hi or localhost:3000/app/bye
@Controller('/app')
export class AppController {

    @Get('/hi')
    getRootRoute() {
        return "Hi there!";
    }

    @Get('/bye')
    getByeThere() {
        return "Bye there!";
    }
}