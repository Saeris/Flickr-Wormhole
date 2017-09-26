import Flickr from "@/flickr"

export default async function getList(
  { apiKey = Flickr.apiKey } = {},
  { filter = ``, page = 1, perPage = 1000, sort = `name` } = {}
) {
  return await Flickr.fetchResource(`flickr.contacts.getList`, { apiKey }, { filter, page, perPage, sort }, `read`)
}
