import Flickr from "@/flickr"

export default function getRecentForContacts(
  { flickr = Flickr } = {},
  { dateLastcomment = ``, contactsFilter = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.comments.getRecentForContacts`,
    {},
    { dateLastcomment, contactsFilter, extras, page, perPage },
    `read`
  )
}
