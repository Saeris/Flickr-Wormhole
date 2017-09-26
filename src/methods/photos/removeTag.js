import Flickr from "@/flickr"

export default async function removeTag({ apiKey = Flickr.apiKey, tagId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.removeTag`, { apiKey, tagId }, {}, `write`)
}
