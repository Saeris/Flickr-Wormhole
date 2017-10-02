import Flickr from "@/flickr"

async function getHidden({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.prefs.getHidden`, {}, {}, `read`)
}

export default getHidden
