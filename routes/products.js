import { Router } from "express"
import { createProduct, deleteProductById, getProductById, getProducts, updateProductById} from "../controllers/products-controllers.js"

const router = Router()

/**
 * 
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Retorna una lista de todos los productos.
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", getProducts);

/**
 * 
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por su ID
 *     description: Retorna un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Producto no encontrado
 */
router.get("/:id", getProductById);

/**
 * /api/products:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: Crea un nuevo producto con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *             example:
 *               title: Ejemplo de producto
 *               description: Descripción del producto
 *               status: En Stock
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '400':
 *         description: Datos de producto no válidos
 */

router.post("/", createProduct);

/**
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar un producto por su ID
 *     description: Actualiza un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *             example:
 *               title: Nuevo título
 *               description: Nueva descripción
 *               status: "sin stock"
 *     responses:
 *       '200':
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Producto no encontrado
 *       '400':
 *         description: Datos de producto no válidos
 */
router.put("/:id", updateProductById);

/**
 * 
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un producto por su ID
 *     description: Elimina un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Producto eliminado exitosamente
 *       '404':
 *         description: Producto no encontrado
 */
router.delete("/:id", deleteProductById);

export default router

