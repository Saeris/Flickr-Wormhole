import Flickr from "@/flickr"

async function getRecentValues({ flickr = Flickr } = {}, { namespace = ``, predicate = ``, addedSince = `` } = {}) {
  return await flickr.fetchResource(`flickr.machinetags.getRecentValues`, {}, { namespace, predicate, addedSince })
}

export default getRecentValues
