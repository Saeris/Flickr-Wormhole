import Flickr from "@/flickr"

export default async function getMethodInfo({ apiKey = Flickr.apiKey, methodName = `` } = {}) {
  return await Flickr.fetchResource(`flickr.reflection.getMethodInfo`, { apiKey, methodName })
}
