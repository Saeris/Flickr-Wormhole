import Flickr from "@/flickr"

async function getLimits({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.people.getLimits`, {}, {}, `read`)
}

export default getLimits
