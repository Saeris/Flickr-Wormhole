import Flickr from "@/flickr"

export default function getHotList({ flickr = Flickr } = {}, { period = `day`, count = 20 } = {}) {
  return flickr.fetchResource(`flickr.tags.getHotList`, {}, { period, count })
}
