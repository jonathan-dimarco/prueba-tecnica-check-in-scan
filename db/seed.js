import sequelize from "./db.js";
import { Product } from "../models/products.js";
import { products } from "./mock-data.js";

//funcion para poblar la base de datos o crearla en caso de que no exista
//la opcion {force:true} va a sobreescribir cualquier dato que se econtraba previamente
//solo utilizo esto a modo de poblar la base en un entorno de prueba

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    for (const product of products) {
      await Product.create(product);
    }
    console.log('Base de datos poblada con éxito');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  } finally {
    await sequelize.close();
  }
};

seed();