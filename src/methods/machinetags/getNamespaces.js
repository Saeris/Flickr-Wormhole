import Flickr from "@/flickr"

export default function getNamespaces({ flickr = Flickr } = {}, { predicate = ``, page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.machinetags.getNamespaces`, {}, { predicate, page, perPage })
}
