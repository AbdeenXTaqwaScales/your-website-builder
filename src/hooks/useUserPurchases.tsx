import { useQuery } from "@tanstack/react-query";

export function useUserPurchases() {
  return useQuery({
    queryKey: ["user-purchases"],
    queryFn: async () => {
      // Placeholder - returns empty array until Supabase is connected
      return [];
    },
  });
}
