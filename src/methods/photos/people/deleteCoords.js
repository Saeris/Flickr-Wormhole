import Flickr from "@/flickr"

export default async function deleteCoords({ apiKey = Flickr.apiKey, photoId = ``, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.people.deleteCoords`, { apiKey, photoId, userId }, {}, `write`)
}
