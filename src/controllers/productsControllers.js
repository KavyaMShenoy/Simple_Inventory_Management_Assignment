const products = require('../productsInventoryData');

//Get all products.
exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
}

// Get details of a specific product.
exports.getProductsById = (req, res) => {
    const productId = req.params.id;

    const product = products.find((prod) => {
        return prod.id === parseInt(productId)
    })

    if (!product) {
        res.status(404).json({ message: "Product not found." });
    } else {
        res.status(200).json(product);
    }
}

// Add a new product.
exports.addProduct = (req, res) => {
    const { productName, price, category, stock } = req.body;

    const productDetails = { id: Math.floor(Math.random() * 1000000000) + Date.now(), productName, price, category, stock };

    products.push(productDetails);

    res.status(200).json({ message: "Created Successfully.", products: products });
}

//Update product details or stock.
exports.updateProductById = (req, res) => {
    const productId = req.params.id;

    const productUpdateIndex = products.findIndex((product) => {
        return product.id === parseInt(productId);
    });

    if (productUpdateIndex === -1) {
        res.status(404).json({ message: "Product not found." });
    } else {

        const { productName, price, category, stock } = req.body;

        if (productName !== undefined) {
            products[productUpdateIndex].productName = productName;
        }

        if (price !== undefined) {
            products[productUpdateIndex].price = price;
        }

        if (category !== undefined) {
            products[productUpdateIndex].category = category;
        }

        if (stock !== undefined) {
            products[productUpdateIndex].stock = stock;
        }

        res.status(200).json(products[productUpdateIndex]);
    }
}

//Delete a product.
exports.deleteProduct = (req, res) => {
    const productId = req.params.id;

    const productDeleteIndex = products.findIndex((product) => {
        return product.id === parseInt(productId);
    });

    if (productDeleteIndex === -1) {
        res.status(404).json({ message: "Product not found." });
    } else {
        products.splice(productDeleteIndex, 1);

        res.status(204).send();
    }
}
