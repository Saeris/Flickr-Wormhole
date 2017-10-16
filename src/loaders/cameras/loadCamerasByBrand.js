import { fetchCamerasByBrand } from "@/resolvers"

export const loadCamerasByBrand = () => new Dataloader(
  arr => Promise.all(arr.map(brand => fetchCamerasByBrand({ brand }))), { batch: false }
)
