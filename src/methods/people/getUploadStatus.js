import Flickr from "@/flickr"

export default async function getUploadStatus({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.people.getUploadStatus`, { apiKey }, {}, `read`)
}
