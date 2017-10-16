import Flickr from "@/flickr"

export default function getListUserPopular({ flickr = Flickr } = {}, { userId = ``, count = 10 } = {}) {
  return flickr.fetchResource(`flickr.tags.getListUserPopular`, {}, { userId, count })
}
