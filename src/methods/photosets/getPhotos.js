import Flickr from "@/flickr"

export default async function getPhotos(
  { apiKey = Flickr.apiKey, photosetId = ``, userId = `` } = {},
  { privacyFilter = 0, media = `all`, extras = ``, page = 1, perPage = 500 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photosets.getPhotos`,
    { apiKey, photosetId, userId },
    { privacyFilter, media, extras, page, perPage }
  )
}
