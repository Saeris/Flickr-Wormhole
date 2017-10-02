import Flickr from "@/flickr"

async function getSubscriptions({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.push.getSubscriptions`, {}, {}, `read`)
}

export default getSubscriptions
