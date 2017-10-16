import Flickr from "@/flickr"

export default function getRecent({ flickr = Flickr } = {}, { extras = ``, page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.photos.getRecent`, {}, { extras, page, perPage })
}
