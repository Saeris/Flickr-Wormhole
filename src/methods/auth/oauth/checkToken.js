import Flickr from "@/flickr"

async function checkToken({ flickr = Flickr, oauthToken = `` } = {}) {
  return await flickr.fetchResource(`flickr.auth.oauth.checkToken`, { oauthToken })
}

export default checkToken
