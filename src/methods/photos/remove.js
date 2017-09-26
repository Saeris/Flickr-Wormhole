import Flickr from "@/flickr"

export default async function remove({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.delete`, { apiKey, photoId }, {}, `delete`)
}
