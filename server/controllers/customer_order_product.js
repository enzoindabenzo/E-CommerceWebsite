const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Order Product
async function createOrderProduct(request, response) {
    try {
        const { customerOrderId, productId, quantity } = request.body;

        // Validation: Check if all required fields are present
        if (!customerOrderId || !productId || !quantity) {
            return response.status(400).json({ error: "Missing required fields: customerOrderId, productId, quantity" });
        }

        // Create the product order
        const corder = await prisma.customer_order_product.create({
            data: {
                customerOrderId,
                productId,
                quantity
            }
        });
        return response.status(201).json(corder);
    } catch (error) {
        console.error("Error creating product order:", error);
        return response.status(500).json({ error: "Error creating product order" });
    }
}

// Update Product Order
async function updateProductOrder(request, response) {
    try {
        const { id } = request.params;
        const { customerOrderId, productId, quantity } = request.body;

        // Validation: Check if all required fields are present
        if (!customerOrderId || !productId || !quantity) {
            return response.status(400).json({ error: "Missing required fields: customerOrderId, productId, quantity" });
        }

        // Check if the order exists
        const existingOrder = await prisma.customer_order_product.findUnique({
            where: {
                id: id
            }
        });

        if (!existingOrder) {
            return response.status(404).json({ error: "Order not found" });
        }

        // Update the order
        const updatedOrder = await prisma.customer_order_product.update({
            where: {
                id: existingOrder.id
            },
            data: {
                customerOrderId,
                productId,
                quantity
            }
        });

        return response.json(updatedOrder);
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: "Error updating order" });
    }
}

// Delete Product Order
async function deleteProductOrder(request, response) {
    try {
        const { id } = request.params;

        // Delete product orders by customerOrderId
        const result = await prisma.customer_order_product.deleteMany({
            where: {
                customerOrderId: id
            }
        });

        if (result.count === 0) {
            return response.status(404).json({ error: "No orders found for the given customerOrderId" });
        }

        return response.status(204).send(); // Successfully deleted
    } catch (error) {
        console.error("Error deleting product orders:", error);
        return response.status(500).json({ error: "Error deleting product orders" });
    }
}

// Get Product Order by CustomerOrderId
async function getProductOrder(request, response) {
    const { id } = request.params;

    // Fetch the product orders associated with the customerOrderId
    const order = await prisma.customer_order_product.findMany({
        where: {
            customerOrderId: id // Filter orders by customerOrderId
        },
        include: {
            product: true // Include product details in the response
        }
    });

    if (!order || order.length === 0) {
        return response.status(404).json({ error: "Order not found" });
    }

    return response.status(200).json(order);
}

// Get All Product Orders
async function getAllProductOrders(request, response) {
    try {
        // Fetch all orders along with related product and customer order details
        const productOrders = await prisma.customer_order_product.findMany({
            include: {
                product: {
                    select: {
                        id: true,
                        title: true,
                        mainImage: true,
                        price: true,
                        slug: true
                    }
                },
                customerOrder: {
                    select: {
                        id: true,
                        name: true,
                        lastname: true,
                        phone: true,
                        email: true,
                        company: true,
                        adress: true,
                        apartment: true,
                        postalCode: true,
                        dateTime: true,
                        status: true,
                        total: true
                    }
                }
            }
        });

        // Group product orders by customerOrderId
        const ordersMap = productOrders.reduce((acc, order) => {
            const { customerOrder, product, quantity } = order;
            const { id, ...orderDetails } = customerOrder;

            if (!acc[id]) {
                acc[id] = { customerOrderId: id, customerOrder: orderDetails, products: [] };
            }
            acc[id].products.push({ ...product, quantity });

            return acc;
        }, {});

        // Convert map to an array
        const groupedOrders = Object.values(ordersMap);

        return response.json(groupedOrders);
    } catch (error) {
        console.error('Error fetching all product orders:', error);
        return response.status(500).json({ error: "Error fetching all product orders" });
    }
}

module.exports = { createOrderProduct, updateProductOrder, deleteProductOrder, getProductOrder, getAllProductOrders };
