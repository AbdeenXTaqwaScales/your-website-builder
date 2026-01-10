import { useQuery } from "@tanstack/react-query";
import { shopifyFetch, PRODUCTS_QUERY, ProductsResponse } from "@/lib/shopify";

export function useProducts(first: number = 12) {
  return useQuery({
    queryKey: ["products", first],
    queryFn: () => shopifyFetch<ProductsResponse>(PRODUCTS_QUERY, { first }),
  });
}
