import Flickr from "@/flickr"

export default function getInstitutions({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.commons.getInstitutions`)
}
