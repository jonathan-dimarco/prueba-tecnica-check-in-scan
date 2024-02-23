import sequelize from './db/db.js'
import express from 'express'
import router from "./routes/products.js"
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(express.json())

app.use("/api/products", router)

const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//     console.log(`App listening on port: ${PORT}`)
// })

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, () => {
      console.log(`App listening on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });