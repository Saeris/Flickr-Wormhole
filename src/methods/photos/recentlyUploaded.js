import Flickr from "@/flickr"

export default async function recentlyUploaded(
  { apiKey = Flickr.apiKey } = {},
  { minDate = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.recentlyUpdated`,
    { apiKey },
    { minDate, extras, page, perPage },
    `read`
  )
}
