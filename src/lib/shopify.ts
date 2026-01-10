const SHOPIFY_API_VERSION = "2025-07";
const SHOPIFY_STORE_DOMAIN = "YOUR_STORE.myshopify.com"; // UPDATE THIS
const STOREFRONT_ACCESS_TOKEN = "YOUR_TOKEN"; // UPDATE THIS

const STOREFRONT_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

export async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(STOREFRONT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const rawText = await response.text();

  if (!response.ok) {
    throw new Error(
      `Shopify API error (${response.status}): ${response.statusText}${rawText ? ` — ${rawText}` : ""}`
    );
  }

  const json = rawText ? JSON.parse(rawText) : {};

  if (json.errors?.length) {
    throw new Error(json.errors[0]?.message || "Unknown Shopify error");
  }

  return json.data as T;
}

export const PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function redirectToCheckout(
  productHandle: string,
  opts?: { variantIndex?: number }
): Promise<void> {
  const variantIndex = opts?.variantIndex ?? 0;

  const productResponse = await shopifyFetch<{
    productByHandle: {
      variants: { edges: Array<{ node: { id: string; title: string } }> };
    } | null;
  }>(PRODUCT_BY_HANDLE_QUERY, { handle: productHandle });

  if (!productResponse.productByHandle) throw new Error("Product not found");

  const variant = productResponse.productByHandle.variants.edges[variantIndex]?.node;
  if (!variant) throw new Error("Variant not found");

  const cartResponse = await shopifyFetch<{
    cartCreate: {
      cart: { checkoutUrl: string } | null;
      userErrors: Array<{ message: string }>;
    };
  }>(CART_CREATE_MUTATION, {
    input: {
      lines: [{ merchandiseId: variant.id, quantity: 1 }],
    },
  });

  if (cartResponse.cartCreate.userErrors?.length) {
    throw new Error(cartResponse.cartCreate.userErrors[0].message);
  }

  const checkoutUrl = cartResponse.cartCreate.cart?.checkoutUrl;
  if (!checkoutUrl) throw new Error("Failed to create cart");

  const url = new URL(checkoutUrl, `https://${SHOPIFY_STORE_DOMAIN}`);
  url.searchParams.set("channel", "online_store");
  const targetUrl = url.toString();

  try {
    window.top?.location.assign(targetUrl);
  } catch {
    window.location.assign(targetUrl);
  }
}

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
}

export interface ProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}
