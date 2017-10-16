import { fetchPhotoByID } from "@/resolvers"

export const loadPhoto = flickr => new Dataloader(
  arr => Promise.all(arr.map(photoId => fetchPhotoByID({ flickr, photoId }))), { batch: false }
)
