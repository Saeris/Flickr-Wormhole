import Flickr from "@/flickr"

async function getPhotosOf(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { ownerId = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(`flickr.people.getPhotosOf`, { apiKey, userId }, { ownerId, extras, page, perPage })
}

export default getPhotosOf
