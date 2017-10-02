import Flickr from "@/flickr"

async function findByUsername({ flickr = Flickr, username = `` } = {}) {
  return await flickr.fetchResource(`flickr.people.findByUsername`, { username })
}

export default findByUsername
