import Flickr from "@/flickr"

async function removeTag({ apiKey = Flickr.apiKey, tagId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.removeTag`, { apiKey, tagId }, {}, `write`)
}

export default removeTag
