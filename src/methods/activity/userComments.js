import Flickr from "@/flickr"

export default function userComments({ flickr = Flickr } = {}, { page = 1, perPage = 10 } = {}) {
  return flickr.fetchResource(`flickr.activity.userComments`, {}, { page, perPage }, `read`)
}
