import Flickr from "@/flickr"

async function remove({ flickr = Flickr, photoId = ``, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.people.delete`, { photoId, userId }, {}, `write`)
}

export default remove
