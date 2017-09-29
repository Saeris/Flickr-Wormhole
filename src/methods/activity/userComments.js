import Flickr from "@/flickr"

async function userComments({ apiKey = Flickr.apiKey } = {}, { page = 1, perPage = 10 } = {}) {
  return await Flickr.fetchResource(`flickr.activity.userComments`, { apiKey }, { page, perPage }, `read`)
}

export default userComments
