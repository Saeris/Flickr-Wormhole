import Flickr from "@/flickr"

export default async function getToken({ apiKey = Flickr.apiKey, frob = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.getToken`, { apiKey, frob })
}
