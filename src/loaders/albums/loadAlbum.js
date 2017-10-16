import { fetchAlbumByID } from "@/resolvers"

export const loadAlbum = flickr => new Dataloader(
  arr => Promise.all(arr.map(([userId, photosetId]) => fetchAlbumByID({ flickr, userId, photosetId }))), { batch: false }
)
