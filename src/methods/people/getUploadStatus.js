import Flickr from "@/flickr"

async function getUploadStatus({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.people.getUploadStatus`, {}, {}, `read`)
}

export default getUploadStatus
