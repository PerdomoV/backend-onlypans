import { Controller, Res, Body, Param } from '@nestjs/common';
import { Get, Post, Put, Delete, HttpStatus, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create_product.dto';


@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get()
    async fetchAllProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.CREATED).json(products);
            
    }

    @Get('/:productID')
    async fetchProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if(!product) throw new NotFoundException('El producto no existe')
        return res.status(HttpStatus.OK).json(product);
    }


    @Post()
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.CREATED).json({
            message: 'Product created',
            product: product
        });
    }


    @Put('/:productID')
    async updateProduct(@Res() res, @Body() editProduct:CreateProductDTO, @Param('productID') productID){
        const updatedProduct = await this.productService.updateProduct(productID, editProduct);
        if (!updatedProduct) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Producto actualizado exitosamente',
            updatedProduct: updatedProduct
        });
    }

    @Delete('/:productID')
    async deleteProduct(@Res() res, @Param('ProductID') productID){
        const deletedProduct = await this.productService.deleteProduct(productID);
        if(!deletedProduct) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Producto borrado exitosamente',
            productDeleted: deletedProduct
        });
    }


}
