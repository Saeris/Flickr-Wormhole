import Flickr from "@/flickr"

async function getPhotos(
  { apiKey = Flickr.apiKey, groupId = `` } = {},
  { tags = ``, userId = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.groups.pools.getPhotos`,
    { apiKey, groupId },
    { tags, userId, extras, page, perPage }
  )
}

export default getPhotos
