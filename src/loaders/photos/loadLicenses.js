import { fetchLicenses } from "@/resolvers"

export const loadLicenses = flickr => new Dataloader(arr => Promise.all(arr.map(() => fetchLicenses({ flickr }))))
