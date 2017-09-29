import Flickr from "@/flickr"

async function getUserProfile({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.getUserProfile`, { apiKey, userId })
}

export default getUserProfile
