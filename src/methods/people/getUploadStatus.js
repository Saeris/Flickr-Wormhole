import Flickr from "@/flickr"

export default function getUploadStatus({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.people.getUploadStatus`, {}, {}, `read`)
}
