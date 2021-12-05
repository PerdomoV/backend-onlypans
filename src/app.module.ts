import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { PedidoModule } from './pedido/pedido.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://toor:raiz@cluster0.oxpyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser : true }), 
    ProductModule, AuthModule, PedidoModule, OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
