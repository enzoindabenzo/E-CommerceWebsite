const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Helper function to normalize image paths
const normalizeImagePath = (imagePath) => {
  if (!imagePath) return "/img/f/product_placeholder.jpg";
  // Remove domain (e.g., http://localhost:3000) if present
  let cleanPath = imagePath.replace(/https?:\/\/[^\/]+/, "");
  // Prepend /img/f/ if not already present
  if (!cleanPath.startsWith("/img/f/")) {
    cleanPath = "/img/f/" + cleanPath.replace(/^\//, ""); // Avoid double slashes
  }
  // Remove double slashes and ensure single leading slash
  cleanPath = cleanPath.replace(/\/+/g, "/");
  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
};

async function getAllProducts(request, response) {
  try {
    const mode = request.query.mode || "";
    // Admin mode: return all products without filtering or pagination
    if (mode === "admin") {
      const adminProducts = await prisma.product.findMany({});
      return response.json(adminProducts);
    }

    // Parse query parameters
    const page = Number(request.query.page) || 1;
    const limit = Number(request.query.limit) || 9; // Default to 9 products
    const sort = request.query.sort || "price";
    const filters = request.query.filters || {};

    // Build filter object
    const whereClause = {};

    // Handle rating filter
    if (filters.rating && filters.rating.$gte) {
      whereClause.rating = { gte: Number(filters.rating.$gte) };
    }

    // Handle inStock filter
    if (filters.inStock) {
      if (filters.inStock.$equals !== undefined) {
        whereClause.inStock = Number(filters.inStock.$equals);
      } else if (filters.inStock.$lt !== undefined) {
        whereClause.inStock = { lt: Number(filters.inStock.$lt) };
      }
    }

    // Handle category filter
    if (filters.category && filters.category.$equals && filters.category.$equals !== "all-products") {
      whereClause.category = { name: { equals: filters.category.$equals } };
    }

    // Build sort object
    let sortObj = {};
    if (sort === "defaultSort") {
      sortObj = { price: "asc" }; // Default sort by price ascending
    } else if (sort === "titleAsc") {
      sortObj = { title: "asc" };
    } else if (sort === "titleDesc") {
      sortObj = { title: "desc" };
    } else if (sort === "lowPrice") {
      sortObj = { price: "asc" };
    } else if (sort === "highPrice") {
      sortObj = { price: "desc" };
    }

    // Fetch total count
    const totalCount = await prisma.product.count({
      where: whereClause,
    });

    // Fetch products with pagination
    const products = await prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      where: whereClause,
      orderBy: sortObj,
    });

    return response.json({
      products,
      totalCount,
    });
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return response.status(500).json({
      error: "Error fetching products",
      message: error.message,
    });
  }
}

async function createProduct(request, response) {
  try {
    const {
      slug,
      title,
      mainImage,
      price,
      description,
      manufacturer,
      categoryId,
      inStock,
    } = request.body;

    // Normalize the mainImage path before saving to the database
    const normalizedImage = normalizeImagePath(mainImage);

    const product = await prisma.product.create({
      data: {
        slug,
        title,
        mainImage: normalizedImage, // Use the normalized path
        price,
        rating: 5,
        description,
        manufacturer,
        categoryId,
        inStock,
      },
    });
    return response.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    return response.status(500).json({ error: "Error creating product" });
  }
}

async function updateProduct(request, response) {
  try {
    const { id } = request.params;
    const {
      slug,
      title,
      mainImage,
      price,
      rating,
      description,
      manufacturer,
      categoryId,
      inStock,
    } = request.body;

    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return response.status(404).json({ error: "Product not found" });
    }

    // Normalize the mainImage path before updating the database
    const normalizedImage = normalizeImagePath(mainImage);

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        title,
        mainImage: normalizedImage, // Use the normalized path
        slug,
        price,
        rating,
        description,
        manufacturer,
        categoryId,
        inStock,
      },
    });

    return response.status(200).json(updatedProduct);
  } catch (error) {
    return response.status(500).json({ error: "Error updating product" });
  }
}

async function deleteProduct(request, response) {
  try {
    const { id } = request.params;

    const relatedOrderProductItems = await prisma.customer_order_product.findMany({
      where: { productId: id },
    });
    if (relatedOrderProductItems.length > 0) {
      return response.status(400).json({ error: "Cannot delete product because of foreign key constraint." });
    }

    await prisma.product.delete({
      where: { id },
    });
    return response.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    return response.status(500).json({ error: "Error deleting product" });
  }
}

async function searchProducts(request, response) {
  try {
    const { query } = request.query;
    if (!query) {
      return response.status(400).json({ error: "Query parameter is required" });
    }

    const products = await prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });

    return response.json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    return response.status(500).json({ error: "Error searching products" });
  }
}

async function getProductById(request, response) {
  try {
    const { id } = request.params;
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
    if (!product) {
      return response.status(404).json({ error: "Product not found" });
    }
    return response.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return response.status(500).json({ error: "Error fetching product" });
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductById,
};