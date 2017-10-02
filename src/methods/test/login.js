import Flickr from "@/flickr"

async function login({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.test.login`, {}, {}, `read`)
}

export default login
