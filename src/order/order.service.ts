import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDTO } from './dto/create_order-dto';
import { IPedido } from './interfaces/order.interface';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private readonly orderModel: Model<IPedido>){}

        async createOrder(createOrderDTO: CreateOrderDTO): Promise<IPedido>{
            const order = await new this.orderModel(createOrderDTO);
            return await order.save();
        }
       
    }



