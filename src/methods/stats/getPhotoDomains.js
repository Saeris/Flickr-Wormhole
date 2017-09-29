import Flickr from "@/flickr"

async function getPhotoDomains(
  { apiKey = Flickr.apiKey, date = `` } = {},
  { photoId = ``, page = 1, perPage = 25 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.stats.getPhotoDomains`,
    { apiKey, date },
    { photoId, page, perPage },
    `read`
  )
}

export default getPhotoDomains
