import Flickr from "@/flickr"

async function getRecentForContacts(
  { apiKey = Flickr.apiKey } = {},
  { dateLastcomment = ``, contactsFilter = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.comments.getRecentForContacts`,
    { apiKey },
    { dateLastcomment, contactsFilter, extras, page, perPage },
    `read`
  )
}

export default getRecentForContacts
