import Flickr from "@/flickr"

async function getListRecentlyUploaded({ apiKey = Flickr.apiKey } = {}, { dateLastupload = ``, filter = `all` } = {}) {
  return await Flickr.fetchResource(
    `flickr.contacts.getListRecentlyUploaded`,
    { apiKey },
    { dateLastupload, filter },
    `read`
  )
}

export default getListRecentlyUploaded
