import Flickr from "@/flickr"

export default function getList({ flickr = Flickr } = {}, { date = ``, extras = ``, page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.interestingness.getList`, {}, { date, extras, page, perPage })
}
