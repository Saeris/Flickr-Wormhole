import Flickr from "@/flickr"

export default async function editMeta(
  { apiKey = Flickr.apiKey, galleryId = ``, title = `` } = {},
  { description = `` } = {}
) {
  return await Flickr.fetchResource(`flickr.galleries.editMeta`, { apiKey, galleryId, title }, { description }, `write`)
}
