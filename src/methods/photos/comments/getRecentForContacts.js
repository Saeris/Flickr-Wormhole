import Flickr from "@/flickr"

async function getRecentForContacts(
  { flickr = Flickr } = {},
  { dateLastcomment = ``, contactsFilter = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.comments.getRecentForContacts`,
    {},
    { dateLastcomment, contactsFilter, extras, page, perPage },
    `read`
  )
}

export default getRecentForContacts
