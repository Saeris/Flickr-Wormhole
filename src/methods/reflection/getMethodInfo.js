import Flickr from "@/flickr"

export default function getMethodInfo({ flickr = Flickr, methodName = `` } = {}) {
  return flickr.fetchResource(`flickr.reflection.getMethodInfo`, { methodName })
}
