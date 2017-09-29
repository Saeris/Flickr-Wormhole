import Flickr from "@/flickr"

async function findByEmail({ apiKey = Flickr.apiKey, findEmail = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.findByEmail`, { apiKey, findEmail })
}

export default findByEmail
