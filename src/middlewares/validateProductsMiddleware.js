const validateProductsMiddleware = (req, res, next) => {
    const { productName, price, category, stock } = req.body;

    if (!productName || !price || !category || !stock) {
        return res.status(400).json({ message: "Product name, price, category and stock are required." });
    }

    if (typeof price === 'string') {
        return res.status(400).json({ message: "Price should not be a string." });
    }

    if (typeof stock === 'string') {
        return res.status(400).json({ message: "Stock should not be a string." });
    }

    if (isNaN(price) || price <= 0) {
        return res.status(400).json({ message: "Invalid Price." });
    }

    if (isNaN(stock) || stock <= 0) {
        return res.status(400).json({ message: "Invalid Stock." });
    }

    next();
}

module.exports = validateProductsMiddleware;