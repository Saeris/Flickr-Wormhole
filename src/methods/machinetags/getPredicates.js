import Flickr from "@/flickr"

async function getPredicates({ flickr = Flickr } = {}, { namespace = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.machinetags.getPredicates`, {}, { namespace, page, perPage })
}

export default getPredicates
