import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('local/signin')
    async signinLocal(@Res() res, @Body() authDTO: AuthDTO){
        const logged = await this.authService.signinLocal(authDTO);
        return res.status(HttpStatus.OK).json({
            accessToken: logged
        })
    }

    @Post('local/signup')
    async signupLocal(@Res() res, @Body() authDTO: AuthDTO){
        const registro = await this.authService.signupLocal(authDTO);
        return res.status(HttpStatus.OK).json(registro);
    }

}
