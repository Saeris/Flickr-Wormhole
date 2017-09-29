import Flickr from "@/flickr"

async function getUploadStatus({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.people.getUploadStatus`, { apiKey }, {}, `read`)
}

export default getUploadStatus
