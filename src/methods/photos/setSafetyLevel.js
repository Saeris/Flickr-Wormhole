import Flickr from "@/flickr"

export default function setSafetyLevel({ flickr = Flickr, photoId = `` } = {}, { safetyLevel = 1, hidden = `0` } = {}) {
  return flickr.fetchResource(`flickr.photos.setSafetyLevel`, { photoId }, { safetyLevel, hidden }, `write`)
}
