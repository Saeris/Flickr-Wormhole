import Flickr from "@/flickr"

async function getUserProfile({ flickr = Flickr, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.urls.getUserProfile`, { userId })
}

export default getUserProfile
