import Flickr from "@/flickr"

export default async function getValues(
  { apiKey = Flickr.apiKey, namespace = ``, predicate = `` } = {},
  { page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(`flickr.machinetags.getValues`, { apiKey, namespace, predicate }, { page, perPage })
}
