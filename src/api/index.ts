import { BASE_URL } from "@/config";

export const getProducts = async (limit = 10, page = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/products?limit=${limit}&page=${page}`,
      { cache: "no-store" } 
    );

    if (!res.ok) throw new Error("Failed to fetch products");

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};
