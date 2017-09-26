import Flickr from "@/flickr"

export default async function create(
  { apiKey = Flickr.apiKey, title = ``, primaryPhotoId = `` } = {},
  { description = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photosets.create`,
    { apiKey, title, primaryPhotoId },
    { description },
    `write`
  )
}
