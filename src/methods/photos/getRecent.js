import Flickr from "@/flickr"

async function getRecent({ flickr = Flickr } = {}, { extras = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.photos.getRecent`, {}, { extras, page, perPage })
}

export default getRecent
