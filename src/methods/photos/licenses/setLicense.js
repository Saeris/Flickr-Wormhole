import Flickr from "@/flickr"

export default async function setLicense({ apiKey = Flickr.apiKey, photoId = ``, licenseId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.licenses.setLicense`, { apiKey, photoId, licenseId }, {}, `write`)
}
