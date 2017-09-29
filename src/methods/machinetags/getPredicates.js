import Flickr from "@/flickr"

async function getPredicates({ apiKey = Flickr.apiKey } = {}, { namespace = ``, page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.machinetags.getPredicates`, { apiKey }, { namespace, page, perPage })
}

export default getPredicates
