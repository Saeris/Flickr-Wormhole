import Flickr from "@/flickr"

async function userComments({ flickr = Flickr } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(`flickr.activity.userComments`, {}, { page, perPage }, `read`)
}

export default userComments
