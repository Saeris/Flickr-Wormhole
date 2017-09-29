import Flickr from "@/flickr"

async function getPhotostreamReferrers(
  { apiKey = Flickr.apiKey, date = ``, domain = `` } = {},
  { page = 1, perPage = 25 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.stats.getPhotostreamReferrers`,
    { apiKey, date, domain },
    { page, perPage },
    `read`
  )
}

export default getPhotostreamReferrers
