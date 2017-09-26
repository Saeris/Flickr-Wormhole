import Flickr from "@/flickr"

export default async function getList({ apiKey = Flickr.apiKey } = {}, { photoId = ``, statusId = `0` } = options) {
  return await Flickr.fetchResource(`flickr.photos.suggestions.getList`, { apiKey }, { photoId, statusId }, `read`)
}
