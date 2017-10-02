import Flickr from "@/flickr"

async function findByEmail({ flickr = Flickr, findEmail = `` } = {}) {
  return await flickr.fetchResource(`flickr.people.findByEmail`, { findEmail })
}

export default findByEmail
