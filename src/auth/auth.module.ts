import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './schemas/auth.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'Auth', schema: AuthSchema}
    ]),
    JwtModule.register({
      secret: 'super-secret-cat',
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
