import Flickr from "@/flickr"

async function setSafetyLevel(
  { flickr = Flickr, photoId = `` } = {},
  { safetyLevel = 1, hidden = `0` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.setSafetyLevel`,
    { photoId },
    { safetyLevel, hidden },
    `write`
  )
}

export default setSafetyLevel
