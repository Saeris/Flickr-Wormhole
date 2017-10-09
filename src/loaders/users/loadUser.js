import { fetchUserByID } from "@/resolvers"

export const loadUser = flickr =>
  new Dataloader(arr => Promise.all(arr.map(userId => fetchUserByID({ flickr, userId }))), { batch: false })
