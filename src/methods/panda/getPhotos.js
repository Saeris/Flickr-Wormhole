import Flickr from "@/flickr"

async function getPhotos(
  { apiKey = Flickr.apiKey, pandaName = `` } = {},
  { extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(`flickr.panda.getPhotos`, { apiKey, pandaName }, { extras, page, perPage })
}

export default getPhotos
