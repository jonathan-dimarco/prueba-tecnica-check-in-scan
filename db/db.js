import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//Creacion de una instancia de conexion a la base de datos

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

export default sequelize;
