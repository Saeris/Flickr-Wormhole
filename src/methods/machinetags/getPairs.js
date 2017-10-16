import Flickr from "@/flickr"

export default function getPairs(
  { flickr = Flickr } = {},
  { namespace = ``, predicate = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.machinetags.getPairs`, {}, { namespace, predicate, page, perPage })
}
