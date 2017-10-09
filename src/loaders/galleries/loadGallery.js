import { fetchGalleryByID } from "@/resolvers"

export const loadGallery = flickr =>
  new Dataloader(arr => Promise.all(arr.map(galleryId => fetchGalleryByID({ flickr, galleryId }))), { batch: false })
