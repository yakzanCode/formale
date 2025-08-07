// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Product } from "../models/Product";
import type { Category } from "../models/Category";

export const client = createClient({
  projectId: "x2ba2fw9",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export async function fetchProducts(categorySlug?: string): Promise<Product[]> {
  // If no slug provided or slug === "all" return all products
  // Otherwise return only products whose category->slug.current matches the slug
  const query = `*[_type == "product" && ($slug == "all" || $slug == "" || category->slug.current == $slug)]{
    _id,
    name,
    price,
    rating,
    "slug": slug.current,
    description,
    images[]{ asset->{ _id, url } },
    "category": category->{ name, "slug": slug.current },
    isFeatured,
    isNew,
    inStock,
    priceBeforeSale,
    usage,
    size
  } | order(isFeatured desc, name asc)`;

  // pass slug param; if undefined pass "all" so query returns everything
  const params = { slug: categorySlug ?? "all" };
  return client.fetch(query, params);
}

//  Nourishing Shampoo & Conditioner, Triple Action Complex Men's Antiperspirant, Body Care Bundle, Hydrating Facial Cleanser, Restoring Daily Facial Moisturizer, Tattoo Care Bundle, Eye Revival Duo Bundle, Enriching Bar Soap, Full Body Aluminum Free Men's Spray Deodorant, Ultimate Shower Bundle, Nourishing Shampoo & Conditioner, Agless Action Facial Exfoliatings Scrub.

export async function fetchCategories(): Promise<Category[]> {
  const query = `*[_type == "category"]{
    _id,
    name,
    "slug": slug.current,
    image
  } | order(name asc)`;

  return await client.fetch(query);
}
