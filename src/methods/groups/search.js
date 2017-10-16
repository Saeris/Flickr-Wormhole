import Flickr from "@/flickr"

export default function search({ flickr = Flickr, text = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.groups.search`, { text }, { page, perPage })
}
