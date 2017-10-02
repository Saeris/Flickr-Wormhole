import Flickr from "@/flickr"

async function checkToken({ flickr = Flickr, authToken = `` } = {}) {
  return await flickr.fetchResource(`flickr.auth.checkToken`, { authToken })
}

export default checkToken
