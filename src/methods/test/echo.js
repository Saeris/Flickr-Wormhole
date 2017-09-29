import Flickr from "@/flickr"

async function echo({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.test.echo`, { apiKey })
}

export default echo
