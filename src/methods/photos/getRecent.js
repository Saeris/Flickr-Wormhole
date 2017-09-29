import Flickr from "@/flickr"

async function getRecent({ apiKey = Flickr.apiKey } = {}, { extras = ``, page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getRecent`, { apiKey }, { extras, page, perPage })
}

export default getRecent
