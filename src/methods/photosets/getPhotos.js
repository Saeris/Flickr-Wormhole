import Flickr from "@/flickr"

export default function getPhotos(
  { flickr = Flickr, photosetId = ``, userId = `` } = {},
  { privacyFilter = 0, media = `all`, extras = ``, page = 1, perPage = 500 } = {}
) {
  return flickr.fetchResource(
    `flickr.photosets.getPhotos`,
    { photosetId, userId },
    { privacyFilter, media, extras, page, perPage }
  )
}
