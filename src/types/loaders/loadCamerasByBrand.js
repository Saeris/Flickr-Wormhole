import { fetchCamerasByBrand } from "../resolvers"

export const loadCamerasByBrand = flickr =>
  new Dataloader(arr => Promise.all(arr.map(brand => fetchCamerasByBrand({ flickr, brand }))))
