import Flickr from "@/flickr"

export default async function getListRecentlyUploaded(
  { apiKey = Flickr.apiKey } = {},
  { dateLastupload = ``, filter = `all` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.contacts.getListRecentlyUploaded`,
    { apiKey },
    { dateLastupload, filter },
    `read`
  )
}
