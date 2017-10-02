import Flickr from "@/flickr"

async function getValues({ flickr = Flickr, namespace = ``, predicate = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.machinetags.getValues`, { namespace, predicate }, { page, perPage })
}

export default getValues
