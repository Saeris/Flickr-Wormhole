import Flickr from "@/flickr"

export default async function setMeta(
  { apiKey = Flickr.apiKey, photoId = `` } = {},
  { title = ``, description = `` } = {}
) {
  return await Flickr.fetchResource(`flickr.photos.setMeta`, { apiKey, photoId }, { title, description }, `write`)
}
