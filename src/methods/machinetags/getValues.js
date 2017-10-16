import Flickr from "@/flickr"

export default function getValues(
  { flickr = Flickr, namespace = ``, predicate = `` } = {},
  { page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.machinetags.getValues`, { namespace, predicate }, { page, perPage })
}
