import Flickr from "@/flickr"

async function deleteCoords({ flickr = Flickr, photoId = ``, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.people.deleteCoords`, { photoId, userId }, {}, `write`)
}

export default deleteCoords
