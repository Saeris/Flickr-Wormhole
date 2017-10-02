import Flickr from "@/flickr"

async function getPhotosOf(
  { flickr = Flickr, userId = `` } = {},
  { ownerId = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(`flickr.people.getPhotosOf`, { userId }, { ownerId, extras, page, perPage })
}

export default getPhotosOf
