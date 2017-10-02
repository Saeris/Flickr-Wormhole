import Flickr from "@/flickr"

async function getPhotostreamReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { page = 1, perPage = 25 } = {}
) {
  return await flickr.fetchResource(`flickr.stats.getPhotostreamReferrers`, { date, domain }, { page, perPage }, `read`)
}

export default getPhotostreamReferrers
