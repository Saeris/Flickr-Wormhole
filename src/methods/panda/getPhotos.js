import Flickr from "@/flickr"

export default function getPhotos(
  { flickr = Flickr, pandaName = `` } = {},
  { extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.panda.getPhotos`, { pandaName }, { extras, page, perPage })
}
