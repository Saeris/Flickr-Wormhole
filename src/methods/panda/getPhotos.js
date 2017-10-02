import Flickr from "@/flickr"

async function getPhotos({ flickr = Flickr, pandaName = `` } = {}, { extras = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.panda.getPhotos`, { pandaName }, { extras, page, perPage })
}

export default getPhotos
