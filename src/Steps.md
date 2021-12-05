# Steps

1. Instalar nest y nest/cli

npm i -g typescript
npm i -g @nestjs/cli

2. Crear el proyecto en una carpeta

nest new . (. para crear el proyecto en la carpeta actual)

3. Instalar dependencias e iniciar la ejecución

npm install     
npm run start:dev

4. IInstalar las librerías de la Base de datos (MongoDB)

npm install --save @nestjs/mongoose mongoose
npm install @types/mongoose -D -> para tener modo resaltado con mongoose
 
#Para cada modulo se hace lo siguiente:

5. Crear el modulo para la entidad que voy a desarrollar

nest generate module product ó nest g mo product

6. Crear el controlador y el servicio para product

nest g co product 

nest g s product 

7. Crear los dtos para producto

- Crear una carpeta dto dentro del modulo product
- Crear un archivo "create_product.dto.ts"

8. Crear la carpeta interfaces 

- Crear la carpeta interfaces dentro del modulo product
- Crear un archivo product.interface.ts

9. Crear la carpeta Schemas

- Crear una carpeta "schemas" dentro de product
- Crear un archivo llamado "product.schema.ts"


# Configurar la conexión a la BD:

10. Crear la BD y la conexion en MongoAtlas

11. Configurar en app.module la conexión a la base de datos de mongo usando MongooseModule

- En el archivo app.module.ts importamos: 
import { MongooseModule } from '@nestjs/mongoose';

- En la sección "imports: [ ]" (separados por comas ):

    MongooseModule.forRoot('mongodb://localhost/onlypans', { useNewUrlParser : true }), 

## Implementar las funcionalidades de product:

12. Crear schema de producto product.schema.ts en la carpeta de schemas

-Agregar los atributos que tendrá la colección 

13. Actualizar el DTO y la interfaz con los campos a utilizar 

- Actualizar DTO con los mismos atributos del Schema
- Actualizar la interface con los mismos atributos del Schema

14. Agregar a la interfaz el extends Document de mongoose

- Importar Document de mongoose
import { Document } from "mongoose";

- Agregar a la interface la herencia:
export interface IProduct extends Document{


## Programar el servicio y el controlador:

15. configurar el modulo de product "product.module.ts"

- Importar el MongooseModule
- Agregar en imports Mongoose.forFeature


