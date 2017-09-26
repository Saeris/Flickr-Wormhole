import Flickr from "@/flickr"

export default async function getPairs(
  { apiKey = Flickr.apiKey } = {},
  { namespace = ``, predicate = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(`flickr.machinetags.getPairs`, { apiKey }, { namespace, predicate, page, perPage })
}
