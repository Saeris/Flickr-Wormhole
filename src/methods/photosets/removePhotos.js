import Flickr from "@/flickr"

export default async function removePhotos({ apiKey = Flickr.apiKey, photosetId = ``, photoIds = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.removePhotos`, { apiKey, photosetId, photoIds }, {}, `write`)
}
