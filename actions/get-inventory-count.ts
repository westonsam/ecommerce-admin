import prismadb from "@/lib/prismadb";

export const getInventoryCount = async (storeId: string) => {
    const inventoryCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false
        },
    });
    
    return inventoryCount;
}