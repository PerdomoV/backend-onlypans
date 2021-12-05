import { Controller } from '@nestjs/common';
import { Post, Res, Body } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/create_order-dto';


@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService){}

    @Post('')
    async createOrder(@Res() res, @Body() orderDTO: CreateOrderDTO){
        const order = await this.orderService.createOrder(orderDTO);
        return res.status(HttpStatus.OK).json(order);
    }

}
