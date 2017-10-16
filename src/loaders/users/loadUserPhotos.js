import { fetchUserPhotos } from "@/resolvers"

export const loadUserPhotos = flickr => new Dataloader(
  arr => Promise.all(arr.map(userId => fetchUserPhotos({ flickr, userId }))), { batch: false }
)
