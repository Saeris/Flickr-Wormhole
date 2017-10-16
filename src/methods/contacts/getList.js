import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr } = {},
  { filter = ``, page = 1, perPage = 1000, sort = `name` } = {}
) {
  return flickr.fetchResource(`flickr.contacts.getList`, {}, { filter, page, perPage, sort }, `read`)
}
