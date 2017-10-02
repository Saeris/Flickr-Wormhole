import Flickr from "@/flickr"

async function getAccessToken({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.auth.oauth.getAccessToken`)
}

export default getAccessToken
