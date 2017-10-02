import { fetchPhotoImages } from "../resolvers"

export const loadImages = flickr =>
  new Dataloader(arr => Promise.all(arr.map(photoId => fetchPhotoImages({ flickr, photoId }))))
