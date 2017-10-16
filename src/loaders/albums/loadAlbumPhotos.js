import { fetchAlbumPhotos } from "@/resolvers"

export const loadAlbumPhotos = flickr => new Dataloader(
  arr => Promise.all(arr.map(photosetId => fetchAlbumPhotos({ flickr, photosetId })), { batch: false })
)
