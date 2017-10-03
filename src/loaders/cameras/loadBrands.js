import { fetchBrands } from "@/resolvers"

export const loadBrands = flickr => new Dataloader(arr => Promise.all(arr.map(() => fetchBrands({ flickr }))))
