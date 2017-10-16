import Flickr from "@/flickr"

export default function getUserPhotos({ flickr = Flickr, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.urls.getUserPhotos`, { userId })
}
