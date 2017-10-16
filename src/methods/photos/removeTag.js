import Flickr from "@/flickr"

export default function removeTag({ flickr = Flickr, tagId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.removeTag`, { tagId }, {}, `write`)
}
