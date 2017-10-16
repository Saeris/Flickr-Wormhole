import Flickr from "@/flickr"

export default function getLimits({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.people.getLimits`, {}, {}, `read`)
}
