import { PrismaClient } from "@prisma/client";

// Function to create a new instance of PrismaClient
const prismaClientSingleton = () => {
    return new PrismaClient();
}

// Type definition for the PrismaClient singleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Defining a global variable to store the PrismaClient instance
declare global {
    var prisma: PrismaClientSingleton | undefined;
}

// Create or reuse the PrismaClient instance
const prisma = global.prisma ?? prismaClientSingleton();

// Set the global Prisma client only in development
if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}

export default prisma;
