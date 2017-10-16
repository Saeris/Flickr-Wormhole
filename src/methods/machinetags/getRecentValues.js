import Flickr from "@/flickr"

export default function getRecentValues(
  { flickr = Flickr } = {},
  { namespace = ``, predicate = ``, addedSince = `` } = {}
) {
  return flickr.fetchResource(`flickr.machinetags.getRecentValues`, {}, { namespace, predicate, addedSince })
}
