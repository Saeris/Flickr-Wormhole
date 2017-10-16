import Flickr from "@/flickr"

export default function login({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.test.login`, {}, {}, `read`)
}
