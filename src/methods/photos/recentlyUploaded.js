import Flickr from "@/flickr"

async function recentlyUploaded({ flickr = Flickr } = {}, { minDate = ``, extras = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.photos.recentlyUpdated`, {}, { minDate, extras, page, perPage }, `read`)
}

export default recentlyUploaded
