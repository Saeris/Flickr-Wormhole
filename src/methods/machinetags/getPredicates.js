import Flickr from "@/flickr"

export default function getPredicates({ flickr = Flickr } = {}, { namespace = ``, page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.machinetags.getPredicates`, {}, { namespace, page, perPage })
}
