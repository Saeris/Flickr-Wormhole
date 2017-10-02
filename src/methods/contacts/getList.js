import Flickr from "@/flickr"

async function getList(
  { flickr = Flickr } = {},
  { filter = ``, page = 1, perPage = 1000, sort = `name` } = {}
) {
  return await flickr.fetchResource(`flickr.contacts.getList`, {}, { filter, page, perPage, sort }, `read`)
}

export default getList
