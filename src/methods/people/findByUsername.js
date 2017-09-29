import Flickr from "@/flickr"

async function findByUsername({ apiKey = Flickr.apiKey, username = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.findByUsername`, { apiKey, username })
}

export default findByUsername
