import Flickr from "@/flickr"

async function deleteCoords({ apiKey = Flickr.apiKey, photoId = ``, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.people.deleteCoords`, { apiKey, photoId, userId }, {}, `write`)
}

export default deleteCoords
