import Flickr from "@/flickr"

async function getPhotos(
  { flickr = Flickr, groupId = `` } = {},
  { tags = ``, userId = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(
    `flickr.groups.pools.getPhotos`,
    { groupId },
    { tags, userId, extras, page, perPage }
  )
}

export default getPhotos
