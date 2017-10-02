import { fetchUserAlbums } from "../resolvers"

export const loadUserAlbums = flickr =>
  new Dataloader(arr => Promise.all(arr.map(userId => fetchUserAlbums({ flickr, userId }))))
