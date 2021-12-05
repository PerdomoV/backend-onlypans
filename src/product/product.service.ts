import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create_product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>){}
    
    async getProducts(): Promise<IProduct[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID: string): Promise<IProduct>{
        const product = await this.productModel.findById(productID);
        console.log(product.price);
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>{
        const product = await new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productID: string): Promise<IProduct>{
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;
    }
    
    async updateProduct(productID: string, editProduct: CreateProductDTO): Promise<IProduct> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, 
            editProduct, { new: true });
        return updatedProduct;
    }

}
