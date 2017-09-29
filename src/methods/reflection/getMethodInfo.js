import Flickr from "@/flickr"

async function getMethodInfo({ apiKey = Flickr.apiKey, methodName = `` } = {}) {
  return await Flickr.fetchResource(`flickr.reflection.getMethodInfo`, { apiKey, methodName })
}

export default getMethodInfo
