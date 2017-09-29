import Flickr from "@/flickr"

async function remove({ apiKey = Flickr.apiKey, photoId = ``, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.people.delete`, { apiKey, photoId, userId }, {}, `write`)
}

export default remove
