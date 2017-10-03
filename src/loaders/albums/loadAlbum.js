import { fetchAlbumByID } from "@/resolvers"

export const loadAlbum = flickr =>
  new Dataloader(arr => Promise.all(arr.map(albumId => fetchAlbumByID({ flickr, albumId }))))
