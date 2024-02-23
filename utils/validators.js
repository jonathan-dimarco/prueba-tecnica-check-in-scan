export const  validateProductData = (title, description, status) => {
    // Verificar que el título no esté vacío y que la descripción sea una cadena
    if (!title || typeof title !== "string" || !description || typeof description !== "string") {
        return false;
    }
    // Verificar que el estado sea válido
    const validStatusValues = ["en stock", "sin stock"];
    if (status && !validStatusValues.includes(status)) {
        return false;
    }
    return true;
}