import Flickr from "@/flickr"

export default async function setTags({ apiKey = Flickr.apiKey, photoId = ``, tags = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.setTags`, { apiKey, photoId, tags }, {}, `write`)
}
