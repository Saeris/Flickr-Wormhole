import Flickr from "@/flickr"

async function create(
  { apiKey = Flickr.apiKey, title = ``, description = `` } = {},
  { primaryPhotoId = ``, fullResult = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.galleries.create`,
    { apiKey, title, description },
    { primaryPhotoId, fullResult },
    `write`
  )
}

export default create
