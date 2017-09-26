import { fetchLicenses } from "../resolvers"

export const loadLicenses = new Dataloader(arr => Promise.all(arr.map(fetchLicenses)))
