import Flickr from "@/flickr"

export default async function login({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.test.login`, { apiKey }, {}, `read`)
}
