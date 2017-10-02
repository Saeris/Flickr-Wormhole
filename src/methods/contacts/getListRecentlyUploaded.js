import Flickr from "@/flickr"

async function getListRecentlyUploaded({ flickr = Flickr } = {}, { dateLastupload = ``, filter = `all` } = {}) {
  return await flickr.fetchResource(`flickr.contacts.getListRecentlyUploaded`, {}, { dateLastupload, filter }, `read`)
}

export default getListRecentlyUploaded
