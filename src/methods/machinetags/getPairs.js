import Flickr from "@/flickr"

async function getPairs({ flickr = Flickr } = {}, { namespace = ``, predicate = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.machinetags.getPairs`, {}, { namespace, predicate, page, perPage })
}

export default getPairs
