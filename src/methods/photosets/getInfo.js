// @flow
import Flickr from "@/flickr"

type Required = {
  flickr: any,
  photosetId: ID,
  userId: ID
}

export default function getInfo({ flickr = Flickr, photosetId = ``, userId = `` }: Required = {}): Promise<any> {
  return flickr.fetchResource(`flickr.photosets.getInfo`, { photosetId, userId })
}
