import Flickr from "@/flickr"

async function getNamespaces({ flickr = Flickr } = {}, { predicate = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.machinetags.getNamespaces`, {}, { predicate, page, perPage })
}

export default getNamespaces
