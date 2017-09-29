import Flickr from "@/flickr"

async function login({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.test.login`, { apiKey }, {}, `read`)
}

export default login
