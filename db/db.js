import { Sequelize } from "sequelize";

const sequelize = new Sequelize("check-in-scan", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
});

export default sequelize;
