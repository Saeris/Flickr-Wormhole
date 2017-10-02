import Flickr from "@/flickr"

async function create(
  { flickr = Flickr, title = ``, description = `` } = {},
  { primaryPhotoId = ``, fullResult = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.galleries.create`,
    { title, description },
    { primaryPhotoId, fullResult },
    `write`
  )
}

export default create
