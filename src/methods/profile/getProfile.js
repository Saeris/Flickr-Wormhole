import Flickr from "@/flickr"

async function getProfile({ flickr = Flickr, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.profile.getProfile`, { userId })
}

export default getProfile
