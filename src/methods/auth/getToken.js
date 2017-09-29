import Flickr from "@/flickr"

async function getToken({ apiKey = Flickr.apiKey, frob = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.getToken`, { apiKey, frob })
}

export default getToken
