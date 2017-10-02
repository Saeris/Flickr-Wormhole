import Flickr from "@/flickr"

async function getPhotoReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { photoId = ``, page = 1, perPage = 25 } = {}
) {
  return await flickr.fetchResource(
    `flickr.stats.getPhotoReferrers`,
    { date, domain },
    { photoId, page, perPage },
    `read`
  )
}

export default getPhotoReferrers
