import Flickr from "@/flickr"

async function getProfile({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.profile.getProfile`, { apiKey, userId })
}

export default getProfile
