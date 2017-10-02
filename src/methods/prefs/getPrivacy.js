import Flickr from "@/flickr"

async function getPrivacy({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.prefs.getPrivacy`, {}, {}, `read`)
}

export default getPrivacy
