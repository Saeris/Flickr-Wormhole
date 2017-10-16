import Flickr from "@/flickr"

export default function setLicense({ flickr = Flickr, photoId = ``, licenseId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.licenses.setLicense`, { photoId, licenseId }, {}, `write`)
}
