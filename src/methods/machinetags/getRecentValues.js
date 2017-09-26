import Flickr from "@/flickr"

export default async function getRecentValues(
  { apiKey = Flickr.apiKey } = {},
  { namespace = ``, predicate = ``, addedSince = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.machinetags.getRecentValues`,
    { apiKey },
    { namespace, predicate, addedSince }
  )
}
