import Flickr from "@/flickr"

export default function getListRecentlyUploaded(
  { flickr = Flickr } = {},
  { dateLastupload = ``, filter = `all` } = {}
) {
  return flickr.fetchResource(`flickr.contacts.getListRecentlyUploaded`, {}, { dateLastupload, filter }, `read`)
}
