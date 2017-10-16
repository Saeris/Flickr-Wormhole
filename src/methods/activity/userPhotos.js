import Flickr from "@/flickr"

export default function userPhotos({ flickr = Flickr } = {}, { timeframe = ``, page = 1, perPage = 10 } = {}) {
  return flickr.fetchResource(`flickr.activity.userPhotos`, {}, { timeframe, page, perPage }, `read`)
}
