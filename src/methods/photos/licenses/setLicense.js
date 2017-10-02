import Flickr from "@/flickr"

async function setLicense({ flickr = Flickr, photoId = ``, licenseId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.licenses.setLicense`, { photoId, licenseId }, {}, `write`)
}

export default setLicense
