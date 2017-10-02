import Flickr from "@/flickr"

async function removeTag({ flickr = Flickr, tagId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.removeTag`, { tagId }, {}, `write`)
}

export default removeTag
