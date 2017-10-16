import Flickr from "@/flickr"

export default function create(
  { flickr = Flickr, title = ``, description = `` } = {},
  { primaryPhotoId = ``, fullResult = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.galleries.create`,
    { title, description },
    { primaryPhotoId, fullResult },
    `write`
  )
}
