import Flickr from "@/flickr"

export default async function setSafetyLevel(
  { apiKey = Flickr.apiKey, photoId = `` } = {},
  { safetyLevel = 1, hidden = `0` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.setSafetyLevel`,
    { apiKey, photoId },
    { safetyLevel, hidden },
    `write`
  )
}
