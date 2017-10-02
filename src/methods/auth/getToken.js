import Flickr from "@/flickr"

async function getToken({ flickr = Flickr, frob = `` } = {}) {
  return await flickr.fetchResource(`flickr.auth.getToken`, { frob })
}

export default getToken
