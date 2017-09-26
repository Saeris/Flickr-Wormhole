import Flickr from "@/flickr"

export default async function create(
  { apiKey = Flickr.apiKey, title = ``, description = `` } = {},
  { primaryPhotoId = ``, fullResult = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.galleries.create`,
    { apiKey, title, description },
    { primaryPhotoId, fullResult },
    `write`
  )
}
