import Flickr from "@/flickr"

export default async function editMeta(
  { apiKey = Flickr.apiKey, photosetId = ``, title = `` } = {},
  { description = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photosets.editMeta`,
    { apiKey, photosetId, title },
    { description },
    `write`
  )
}
