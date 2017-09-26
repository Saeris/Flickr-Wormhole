import { fetchBrands } from "../resolvers"

export const loadBrands = new Dataloader(arr => Promise.all(arr.map(fetchBrands)))
