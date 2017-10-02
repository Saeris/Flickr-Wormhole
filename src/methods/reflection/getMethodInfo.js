import Flickr from "@/flickr"

async function getMethodInfo({ flickr = Flickr, methodName = `` } = {}) {
  return await flickr.fetchResource(`flickr.reflection.getMethodInfo`, { methodName })
}

export default getMethodInfo
